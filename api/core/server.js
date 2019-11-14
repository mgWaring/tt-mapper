const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const router = require('./core/routes');
const base = require('./config/config.json');
const overrides = require('./config/overrides.json');

const config = assembleConfigs([base, overrides]);

const app = express();

const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(config.url, (e, database) => {
    if (e) return console.log(err);

    ///MAIN
    router(app, database.db("example"));

    app.listen(port, () => {
        console.log("Hey now, you're an all-star");
    });
})