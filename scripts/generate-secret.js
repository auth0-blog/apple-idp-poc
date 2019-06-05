const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./scripts/AuthKey_AUJBFFJN96.p8');
const token = jwt.sign({}, privateKey, {
    algorithm: 'ES256',
    expiresIn: '2 days',
    audience: 'https://appleid.apple.com',
    issuer: 'UUWS9Z463H',
    subject: 'br.com.digituz.apple-login.web'
});

console.log('Token is ', token);
