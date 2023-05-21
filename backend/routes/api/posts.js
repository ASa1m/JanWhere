const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Post = require("../../Models/Post");
const Animal = require("../../Models/Animal");
const User = require("../../Models/User");

router.get("/list/:user_id", (req, res) => {
    Post.find({ user_id: req.params.user_id })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().lean().exec(); // Retrieve the posts as plain JavaScript objects

    const updatedPosts = await Promise.all(posts.map(async (post) => {
      const { animal_id, user_id, ...rest } = post; // Destructure the 'animal_id' and 'user_id' fields

      if (animal_id) {
        const animal = await Animal.findById(animal_id).lean().exec(); // Await the animal retrieval

        if (animal) {
          const { name: animal_name } = animal;
          rest.animal_name = animal_name; // Add 'animal_name' field to the post
        }
      }

      if (user_id) {
        const user = await User.findById(user_id).lean().exec(); // Await the user retrieval

        if (user) {
          const { name: user_name } = user;
          rest.user_name = user_name; // Add 'user_name' field to the post
        }
      }

      return rest; // Return the updated post object
    }));

    res.json(updatedPosts);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});


  
router.post("/addpost", (req, res) => {


    const newPost = new Post({
        animal_id: req.body.animal_id,
        user_id: req.body.user_id,
        location: {
            latitude: req.body.location.latitude,
            longitude: req.body.location.longitude
        },
        cover: req.body.cover,
        content: req.body.content,
        likes: [],
        comments: req.body.comments,
        images: req.body.images,
        region : req.body.region
    });

    newPost.save()
        .then(() => res.json( newPost._id ))
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
                .then(User.findById(post.user_id)
                    .then(user => {
                        if (user) {
                        sendPost.user_id = user.name;
                        }
                        else
                        sendPost.user_id = 'Unknown';

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


                )


            
        )
        .catch(err => res.status(400).json('Error: ' + err));
}

);

router.post("/:id/addcomment", (req, res) => {

    //Add now time
    req.body.date = new Date().toISOString(); 

    console.log(req.body);
    Post.findByIdAndUpdate(
        req.params.id,
        { $push: { comments: req.body } },
        { new: true }
      )
        .then(updatedPost => {
          // Handle the updated post or send a success response
          res.json(updatedPost.comments);
        })
        .catch(err => {
          // Handle the error
          res.status(500).json({ error: 'Failed to add comment to post' });
        });

});

router.post("/:id/like", (req, res) => {

    //Add now time
    req.body.date = new Date().toISOString();

    Post.findByIdAndUpdate(
        req.params.id,
        { $push: { likes: req.body } },
        { new: true }
        )
        .then(updatedPost => {
            // Handle the updated post or send a success response
            res.json(updatedPost.likes);
        })
        .catch(err => {
            // Handle the error
            res.status(500).json({ error: 'Failed to add like to post' });
        });

});

router.post("/:id/unlike", (req, res) => {
    
    Post.findByIdAndUpdate(
        req.params.id,
        { $pull: { likes: req.body } },
        { new: true }
        )
        .then(updatedPost => {
            // Handle the updated post or send a success response
            res.json(updatedPost.likes);
        }
        )
        .catch(err => {
            // Handle the error
            res.status(500).json({ error: 'Failed to remove like from post' });
        }
        );


});

router.delete("/:id/removepost", (req, res) => {

    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json('Post deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));

});


module.exports = router;

