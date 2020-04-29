const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require('pg')
const dbHelpers = require('./helpers')
// const { fetchIslands, fetchResidents } = require('./helpers')

require("dotenv").config();

const client = new Client({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: 5432,
})

const { fetchIslands, fetchResidents } = dbHelpers(client)

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/islands", (req, res) => {
  fetchIslands()
    .then(dbRes => res.json(dbRes))
})

app.get("/residents", (req, res) => {
  fetchResidents()
    .then(dbRes => res.json(dbRes))
})

client.connect().then(() => {
  app.listen(port, () => {
    console.log('server is ready')
  })
})