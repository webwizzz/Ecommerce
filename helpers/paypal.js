const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcrDE0fLPTRaH1ExFJdTN7JIkIdXNjzJnmkvbU9bjAynMIiSB0r-4WOfdPKzgfMkNR5sCIHG8vWHqmGT",
  client_secret: "EO-lbsUyCBA1tP8U97gbE45IfVhN_LC8V7eUdkgAdMwndEF8NspslP5qYsR7FCbYbhZhtVGvAe9WUS4w",
});

module.exports = paypal;
