require("dotenv").config();
const axios = require("axios");

module.exports = async function (query, variables) {
  const res = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SERVER_SECRET}`,
    },
    data: {
      query,
      variables,
    },
  });

  return res.data;
};