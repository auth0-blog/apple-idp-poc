const jwt = require("jsonwebtoken");
const fs = require("fs");

const privateKey = fs.readFileSync("./authkey.p8");
const token = jwt.sign({}, privateKey, {
  algorithm: "ES256",
  expiresIn: "2 days",
  audience: "https://appleid.apple.com",
  issuer: process.env.TEAM_ID,
  subject: process.env.CLIENT_ID,
});

console.log("The token is:", token);
