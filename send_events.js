require("dotenv").config();
const axios = require("axios").default;
const qs = require("querystring");

var Analytics = require("analytics-node");
var analytics = new Analytics(process.env.SEGMENT_WRITE_KEY);

const predictLeadsURL = "https://predictleads.com/api/v2/companies/";

const email = process.env.PREDICT_LEADS_EMAIL;
const user_token = process.env.PREDICT_LEADS_USER_TOKEN;

const config = {
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json"
  },
  params: {
    user_token: user_token,
    user_email: email
  },
  data: {}
};

const headers = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

const sendEventDataToSegment = companies => {
  companies.map(company => {
    axios
      .get(
        `https://predictleads.com/api/v2/companies/${company}/job_openings`,
        config
      )
      .then(res => {
        const signals = res.data.data;
        signals.map(signal => {
          const data = {
            uuid: signal.id,
            type: signal.type,
            company: company,
            title: signal.attributes.title,
            url: signal.attributes.url,
            location: signal.attributes.location,
            first_seen_at: signal.attributes.first_seen_at,
            last_seen_at: signal.attributes.last_seen_at,
            last_processed_at: signal.attributes.last_processed_at,
            job_opening_closed: signal.attributes.job_opening_closed
          };
          axios
            .post(
              "http://localhost:7000/api/signals",
              qs.stringify(data),
              headers
            )
            .then(res => {
              console.log("Signal uploaded");
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

const companies = [
    "github.com",
    "trello.com",
    "clearbit.com",
    "loom.com",
    "segment.com",
    "algolia.com",
    "drift.com"
];

sendEventDataToSegment(companies);
