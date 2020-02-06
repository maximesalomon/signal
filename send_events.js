var https = require("https");
require("dotenv").config();
const axios = require("axios").default;
const qs = require("querystring");
const db = require("./data/db");
const CronJob = require("cron").CronJob;

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

const sendEventDataToSegment = companies => {
  companies.map(company => {
    axios
      .get(`${predictLeadsURL}${company}/job_openings`, config)
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
          db("signals")
            .where("uuid", signal.id)
            .then(res => {
              if (res.length) {
                if (res.job_opening_closed !== signal.job_opening_closed) {
                  // PUT signal THEN Segment Event because job_opening_closed has changed.
                  axios
                    .put(
                      `https://gorgias-growth-engineer-test.herokuapp.com/api/signals/${res[0].id}`,
                      qs.stringify(data),
                      {
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded"
                        }
                      }
                    )
                    .then(res => {
                      res.send(
                        "Signal updated with different job_opening_closed status."
                      );
                      analytics.track({
                        userId: `ghost@${data.company}`,
                        event: "Signal Job Opening Closed",
                        properties: {
                          uuid: signal.id,
                          type: signal.type,
                          company: data.company,
                          title: signal.attributes.title,
                          url: signal.attributes.url,
                          location: signal.attributes.location,
                          first_seen_at: signal.attributes.first_seen_at,
                          last_processed_at:
                            signal.attributes.last_processed_at,
                          last_seen_at: signal.attributes.last_seen_at,
                          job_opening_closed:
                            signal.attributes.job_opening_closed
                        }
                      });
                    })
                    .catch(err => {
                      console.log(err);
                    });
                } else {
                  // PUT signal.
                  axios
                    .put(
                      `https://gorgias-growth-engineer-test.herokuapp.com/api/signals/${res[0].id}`,
                      qs.stringify(data),
                      {
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded"
                        }
                      }
                    )
                    .then(res => {
                      res.send(
                        "Signal updated SINCE last_processed_at but same job_opening_closed status."
                      );
                    })
                    .catch(err => {
                      console.log(err);
                    });
                }
              } else {
                axios
                  .post(
                    "https://gorgias-growth-engineer-test.herokuapp.com/api/signals",
                    qs.stringify(data),
                    {
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                      }
                    }
                  )
                  .then(res => {
                    console.log("Signal uploaded");
                    analytics.track({
                      userId: `ghost@${data.company}`,
                      event: "Signal New Job Opening",
                      properties: {
                        uuid: signal.id,
                        type: signal.type,
                        company: data.company,
                        title: signal.attributes.title,
                        url: signal.attributes.url,
                        location: signal.attributes.location,
                        first_seen_at: signal.attributes.first_seen_at,
                        last_processed_at: signal.attributes.last_processed_at,
                        last_seen_at: signal.attributes.last_seen_at,
                        job_opening_closed: signal.attributes.job_opening_closed
                      }
                    });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

const companies = [
  "amplitude.com",
  "loom.com",
  "segment.com",
  "drift.com",
  "lambdaschool.com",
  "gorgias.com",
  "trello.com",
  "front.com",
  "superhuman.com",
  "algolia.com",
  "intercom.com",
  "mailchimp.com",
  "slack.com",
  "zendesk.com",
  "optimizely.com",
  "twilio.com",
  "dashlane.com",
  "postman.com",
  "notion.so",
  "figma.com",
  "spendesk.com",
  "front.com"
];

const job = new CronJob(
  "23 7 * * *",
  () => {
    console.log(
      "CRON RUNNING --> Get Job Openings Signals from target companies"
    );
    sendEventDataToSegment(companies);
    https.get("https://cronhub.io/ping/dc584860-4849-11ea-bafb-73b460406621");
  },
  null,
  true,
  "Europe/Paris"
);

job.start();
