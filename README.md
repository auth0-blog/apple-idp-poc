# apple-idp-poc

```bash
export CLIENT_ID=br.com.digituz.apple-login.web
export CLIENT_SECRET=eyJ...L6Q
export CALLBACK=https://digituz.com.br/callback

npm start
```

```bash
# building the Docker image
docker build -t auth0blog/apple-sign-in .

# running the Docker image locally
docker run -p 3000:3000 \
  -e CLIENT_ID=com.brunokrebs.webapp \
  -e CLIENT_SECRET=eyJ...L6Q \
  -e CALLBACK=https://brunokrebs.com/callback \
  auth0blog/apple-sign-in

# pushing to Docker Hub
docker push auth0blog/apple-sign-in
```
