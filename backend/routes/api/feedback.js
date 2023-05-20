const express = require("express");
const router = express.Router();

const Feedback = require("../../Models/Feedback");


router.post("/add", (req, res) => {
    const newFeedback = new Feedback({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newFeedback.save().then(() => res.json('Feedback added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

);


module.exports = router;

