# Sign In with Apple: Learn About the New Identity Provider

Learn about the "Sign In with Apple" feature announced at Apple WWDC 2019. This authentication option, which Apple has stated will be mandatory for all App Store apps soon, may present some challenges to application developers, but aims to provide a better user experience for those in the Apple ecosystem through enhanced privacy and seamless login across web and native applications.

Read more at: https://auth0.com/blog/sign-in-with-apple-learn-about-the-new-identity-provider/

## Useful commands

To generate the `CLIENT_SECRET`:

```bash
export CLIENT_ID=com.brunokrebs.webapp
export TEAM_ID=936A789GM7

# you need the authkey.p8 file (check the article)
node generate-secret.js
``` 

To run the web application:

```bash
export CLIENT_ID=com.brunokrebs.webapp
export CLIENT_SECRET=eyJ...L6Q
export CALLBACK=https://brunokrebs.com/callback

npm start
```
