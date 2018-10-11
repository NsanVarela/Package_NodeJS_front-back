# WEBSITE WITH NODE JS & EXPRESS

# Inno Starter pack

A NodeJS app using Express, JavaScript, Bootstrap to create your app with frontend and backend


## Installation

```
$ npm install
```

## Running Locally

```
$ npm start
```

## Prod

```
$ npm run build
```



It still 5 vulnerabilities with [node sass](https://github.com/sass/node-sass/issues/2355)

## Docker

To create the image
```
docker build -t <your username>/innostarterkit .
```

To run the image
```
docker run -p 3000:8080 -d <your username>/innostarterkit
```

To check inside the container
```
docker exec -it <containerId> bash
```

Build docker compose
```
docker-compose build
```

To up docker compose
```
docker-compose up
```



## Link

- [NodeJS](https://nodejs.org/en/docs/)

- [Express](https://expressjs.com/en/starter/installing.html)

- [Node JS and Docker](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
