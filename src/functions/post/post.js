/* eslint-disable */
const fetch = require("node-fetch")
exports.handler = async function(event, context) {
  try {
    console.log(event.body)

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "ok" }),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
