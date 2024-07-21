//Imports :
import http from "k6/http";
import { sleep } from "k6";
import { check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/2.4.0/dist/bundle.js";
import { loadTestOnAmazon } from "./utilities.js";
import { testOptions } from "./options.js";

//setup :
export const options = testOptions.options;

// Virtual user code :
export default function () {
  const res = loadTestOnAmazon();
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
}

//HTML report generation code :
export function handleSummary(data) {
  return {
    "TestSummaryReport.html": htmlReport(data, { debug: true }),
  };
}
