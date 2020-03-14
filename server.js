const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

const databaseName = "workout_db";

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Successfully connected to ${databaseName}`);
    });

// app.use(require("./routes/api-routes.js"))
// app.use(require("./routes/html-routes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
