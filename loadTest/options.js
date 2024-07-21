export const testOptions = {
  options: {
    vus: 1000,
    duration: "15s",
    thresholds: {
      http_req_failed: ["rate<0.01"], // http errors should be less than 1%
      http_req_duration: ["p(95)<200"], // 95% of requests should be below 200ms
    },
  },
};
