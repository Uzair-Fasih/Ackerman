const axios = require("axios");
import { ENV } from "@env";

module.exports = function ({ method, url, query, variables, response }) {
  console.log(ENV, "=====");
  if (ENV === "development") return Promise.resolve(response);
  console.log("Making API Call");
  return new Promise(function (resolve, reject) {
    axios({
      method,
      url,
      data: {
        query,
        variables,
      },
    })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((err) => reject(err));
  });
};
