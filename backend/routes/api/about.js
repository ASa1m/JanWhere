const express = require("express");
const router = express.Router();

const Developer = require("../../Models/Developer");


router.get("/list", (req, res) => {

    Developer.find().then(developer => res.json(developer))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;

