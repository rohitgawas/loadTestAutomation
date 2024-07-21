import http from "k6/http";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/2.4.0/dist/bundle.js";

export function loadTestOnAmazon() {
  return http.get("https://www.amazon.in/");
  sleep(1);
}
