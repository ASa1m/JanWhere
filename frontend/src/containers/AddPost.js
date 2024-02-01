import React, { useState, useMemo, useEffect } from "react";
import { TextField, Button, Container, Typography, Chip } from "@mui/material";
import {
  GoogleMap,
  Marker, LoadScript
} from "@react-google-maps/api";
import axios from 'axios';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";


const AddPost = ( { currentUser } ) => {
  const [position, setPosition] = useState(null);

  const onMapClick = (event) => {
    setPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  const navigate = useNavigate();

  const center = useMemo(
    () => ({ lat: 33.64491333779565, lng: 72.99209107579742 }),
    []
  );

  const handleTagClick = (tag) => {
    const updatedTags = tags.map((t) => ({
      ...t,
      selected: t.id === tag.id,
    }));

    setTags(updatedTags);

    const newSelectedTag = updatedTags.find((t) => t.selected);
    setSelectedTag(newSelectedTag ? newSelectedTag : null);
  };


  const handleSubmit = (e) => {
  
    var newPost = {images:[]};
    e.preventDefault();

    if (selectedTag === null) {
      alert("Please select an animal");
      return;
    }


    //upload images to cloudinary
    const formData = new FormData();
    for (const fil of file) {
      formData.append('images', fil);
    }

    axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, formData)
      .then(res => {
          for (const image of res.data.imageUrls) {
          newPost.images.push(image);
        }
    newPost.cover = title;
    newPost.content = content;
    newPost.animal_id = selectedTag.id ? selectedTag.id : tags[0].id;

    newPost.location = {
      latitude: position ? position.lat : 0,
      longitude: position ? position.lng : 0
    }

    newPost.user_id = currentUser.id;
      }
      ).then(() => {
    axios.post(`${process.env.REACT_APP_API_URL}/api/posts/addpost`, newPost)
      .then(res => 
        {
          alert("Post added successfully!");
          navigate('/post/'+res.data);
        }
      )
      .catch(err => console.log(err));
      }
      )


  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/animals/list`)
      .then(animals =>
        animals.data.forEach(animal =>
          {
            setTags(prevTags =>
              [...prevTags, {id:animal._id, name:animal.name, selected:false}]
            )
          }
          )
        )

  }, []);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
    const files = e.target.files;
    setFile(files);


  };

  // useEffect (() => 
  //   axios.get('/api/animals/list')
  //   .then (animals =>
  //     animals.data.map(animal =>
  //       {
  //         console.log(animal.name);
  //         // tags.push({id:animal._id, name:animal.name, selected:false});
  //       }
  //       )
  //     )
  // )


  return (
    <Container
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Add Post
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <form onSubmit={handleSubmit} className="col-lg-7">
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <TextField
            label="Content"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <br></br>

          <fieldset  style={{border:"1px white solid"}}>
            <div className="">
              <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
              >
                <legend>Location:</legend>
                <GoogleMap
                  mapContainerStyle={{ width: "inherit", height: "50vh" }}
                  center={center}
                  zoom={10}
                  onClick={onMapClick}
                >
                  {position && <Marker key={234} position={position} />}
                </GoogleMap>
                {position && (
                  <p>Marker coordinates: {JSON.stringify(position)}</p>
                )}
              </LoadScript>
            </div>
          </fieldset>
          <br></br>

          <input
            type="file"
            onChange={handleFileChange}
            multiple
            style={{ display: "none" }}
            id="choosebutton"
          />
          <label htmlFor="choosebutton">
            <Button
              variant="contained"
              component="span"
              color="primary"
              sx={{
                backgroundColor: "grey",
                color: "white",
                "&:hover": {
                  backgroundColor: "blue",
                },
              }}
            >
              Choose File
            </Button>
          </label>

          <br></br>
          <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap" }}>
            {tags.map((tag) => (
              <Chip
                key={tag.id}
                label={tag.name}
                onClick={() => handleTagClick(tag)}
                color={tag.selected ? "primary" : "default"}
                style={{
                  marginRight: "0.5rem",
                  marginBottom: "0.5rem",
                  backgroundColor: tag.selected ? "blue" : "gray",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "blue",
                    color: "white",
                  },
                }}
              />
            ))}
          </div>
          <br></br>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
        <div className="m-13 d-flex flex-wrap lg-4">
          {previews.map((previewUrl) => (
            <img
              className="m-2 "
              src={previewUrl}
              alt="Preview"
              key={previewUrl}
              style={{ height: "auto", width: "45%" }}
            />
          ))}

        </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
});

export default connect(mapStateToProps)(AddPost);
