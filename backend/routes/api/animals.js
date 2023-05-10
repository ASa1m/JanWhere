const express = require("express");
const router = express.Router();

const Animal = require("../../models/Animal");


router.get("/list", (req, res) => {

    Animal.find().then(animals => res.json(animals))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/list", (req, res) => {

    const newAnimal = new Animal({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image
    });

    newAnimal.save().then(() => res.json('Animal added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}
);

module.exports = router;

