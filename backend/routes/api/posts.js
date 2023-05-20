const express = require("express");
const router = express.Router();

const Post = require("../../Models/Post");
const Animal = require("../../Models/Animal");
const User = require("../../Models/User");


router.get("/", (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));  
});

router.post("/addpost", (req, res) => {

    const animalId = '';

    //Find animal ID where name = req.body.animalName and get its ID
    Animal.find({name: req.body.animalName})
        .then(animal => {
            animalId = animal._id;
        })



    const newPost = new Post({
        animal_id: animalId,
        user_id: req.body.user_id,
        region: req.body.region,
        location: req.body.location,
        date: req.body.date,
        images: req.body.images,
        cover: req.body.cover,
        content: req.body.content,
        likes: req.body.likes,
        comments: req.body.comments
    });

    newPost.save().then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
        
router.get("/:id", (req, res) => {

    var animalName = '';
    var sendPost = {};

    Post.findById(req.params.id)
        .then(post => 
            Animal.findById(post.animal_id)
                .then(animal => {
                    if (!animal) {
                        animalName = 'Unknown';
                    }
                    else

                    animalName = animal.name;

                    sendPost.animal_id = animalName;
                    
                })
                .catch(err => res.status(400).json('Error: ' + err))
                .then(User.findById(post.user_id)
                    .then(user => {
                        sendPost.user_id = user.name;
                    }
                    ).then(() => {
                        sendPost._id = post._id;
                        sendPost.region = post.region;
                        sendPost.location = post.location;
                        sendPost.date = post.date;
                        sendPost.images = post.images;
                        sendPost.cover = post.cover;
                        sendPost.content = post.content;
                        sendPost.likes = post.likes;
                        sendPost.comments = post.comments;
                        res.json(sendPost);
                    }
                    )
                    .catch(err => res.status(400).json('Error: ' + err))


                )


            
        )
        .catch(err => res.status(400).json('Error: ' + err));
}

);


module.exports = router;

