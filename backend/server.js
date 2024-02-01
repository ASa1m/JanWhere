const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cors = require('cors');


const users = require("./routes/api/users");
const animals = require("./routes/api/animals");
const developers = require("./routes/api/about");
const feedbacks = require("./routes/api/feedback");
const contact = require("./routes/api/contact");
const posts = require("./routes/api/posts");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(cors());

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

  cloudinary.config({ 
    cloud_name: 'dnx1gdi5a', 
    api_key: '126662637282174', 
    api_secret: 'CtoaZwt-KUvJcwT7mItr6HDH5x8' 
  });
  
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'DATA', // Optional
    allowed_formats: ['jpg', 'jpeg', 'png'], // Optional
    // Other optional parameters can be added here
  }
});

const upload = multer({ storage: storage }).array('images', 10);

  app.post('/api/upload', upload, async (req, res) => {
    try {
      const files = req.files; // Access the uploaded files array
      const imageUrls = [];
  
      for (const file of files) {
        const result = await cloudinary.uploader.upload(file.path);
        imageUrls.push(result.secure_url);
  
      }
  
      res.status(201).json({ imageUrls });
    } catch (error) {
      res.status(500).json({ error: 'Failed to upload images' });
    }
  });
  

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
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running at http://localhost:${port}/\nusers: http://localhost:${port}/api/users\nanimals: http://localhost:${port}/api/animals`));
