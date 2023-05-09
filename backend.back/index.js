const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');
const passportConfig() = require('./config/passport');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const dbConnect = require('./database/db');
const db = require('./database/db');

mongoose.connect(dbConnect.db);

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

passportConfig();

app.post('/api/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Logged in successfully' });
});

app.get('/api/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logged out successfully' });
});

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.json({ message: 'Registered and logged in successfully' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
