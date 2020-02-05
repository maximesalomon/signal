require('dotenv').config()

var Analytics = require('analytics-node');
var analytics = new Analytics(process.env.SEGMENT_WRITE_KEY);

const sendEventDataToSegment = companies => {
  companies.map(company => {
    console.log(company);
  });
};

const companies = [
  "clearbit.com",
  "loom.com",
  "segment.com",
  "algolia.com",
  "drift.com"
];

sendEventDataToSegment(companies);