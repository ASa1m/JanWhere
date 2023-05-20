const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const animals = require("./routes/api/animals");
const developers = require("./routes/api/about");
const feedbacks = require("./routes/api/feedback");
const contact = require("./routes/api/contact");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/animals", animals);
app.use("/api/developers", developers);
app.use('/static', express.static('img'));
app.use("/api/feedbacks", feedbacks);
app.use("/api/contact", contact);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running at http://localhost:${port}/\nusers: http://localhost:${port}/api/users\nanimals: http://localhost:${port}/api/animals`));
