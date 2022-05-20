const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("./utils/geocode");

const app = express();

// setting up paths
const pathToPublic = path.join(__dirname, "../public/");
const pathToViews = path.join(__dirname, "../templates/views");
const pathToPartials = path.join(__dirname, "../templates/partials/");

app.set("view engine", "hbs");
app.set("views", pathToViews);
app.use(express.static(pathToPublic));
hbs.registerPartials(pathToPartials);

app.get("/weather", (req, res) => {
  const location = req.query.location;
  return geocode(location).then((response) => {
    res.send(response);
  });
});

app.get("", (req, res) => {
  res.render("index", {
    title: "Welcome to Weather Application",
  });
});

app.listen(3000, () => console.log("Server is up and running on port 3000..."));
