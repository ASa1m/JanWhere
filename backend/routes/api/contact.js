const express = require("express");
const router = express.Router();

const Contact = require("../../Models/Contact");


router.get("/", (req, res) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

