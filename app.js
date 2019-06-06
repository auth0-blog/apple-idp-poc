const express = require("express");
const session = require("express-session");
const port = process.env.PORT || 3000;
const passport = require("passport");
const OAuth2Strategy = require("passport-oauth").OAuth2Strategy;
const fs = require("fs");
const jwt = require("jsonwebtoken");

const domainAssociation = fs.readFileSync(
  "./apple-developer-domain-association.txt",
  "utf8"
);
const appleStrategy = "apple";

const app = express();

app.use(
  session({
    secret: "secret",
    saveUninitialized: false,
    resave: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  "apple",
  new OAuth2Strategy(
    {
      authorizationURL: "https://appleid.apple.com/auth/authorize",
      tokenURL: "https://appleid.apple.com/auth/token",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK,
      state: Date.now() // bleh
    },
    (accessToken, refreshToken, payload, profile, done) => {
      done(null, { profile, payload });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/.well-known/apple-developer-domain-association.txt", (req, res) => {
  res.send(domainAssociation);
});

app.get("/auth/apple", passport.authenticate(appleStrategy));

app.get(
  "/callback",
  passport.authenticate(appleStrategy, {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

app.get("/profile", (req, res) => {
  res.send(
    jwt.decode(req.session.passport.user.payload.id_token, { complete: true })
  );
});

app.get("/", (req, res) => {
  console.log("User", req.user);
  res.send(JSON.stringify({ Hello: "World" }));
});

app.listen(port, () => {
  console.log(`Apple Login POC listening on port ${port}!`);
});
