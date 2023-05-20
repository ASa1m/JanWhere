import React, { useState, useMemo } from "react";
import { TextField, Button, Container, Typography, Chip } from "@mui/material";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  LoadScript,
} from "@react-google-maps/api";

import { v4 as uuidv4 } from "uuid";




const AddPost = () => {
  const [position, setPosition] = useState(null);

  const onMapClick = (event) => {
    setPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };
const images=[]
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [tags, setTags] = useState([
    { id: 1, name: "Lion", selected: false },
    { id: 2, name: "Tiger", selected: false },
    { id: 3, name: "Elephant", selected: false },
    { id: 4, name: "Snake", selected: false },
    { id: 5, name: "Panda", selected: false },
    { id: 6, name: "Human", selected: false },
  ]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(
    () => ({ lat: 33.64491333779565, lng: 72.99209107579742 }),
    []
  );

  const handleTagClick = (tag) => {
    const updatedTags = tags.map((t) => {
      if (t.id === tag.id) {
        return { ...t, selected: !t.selected };
      }
      return t;
    });
    setTags(updatedTags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Files:", files);
    console.log("Tags:", tags);
    // console.log('Previews:', previews);
    setTitle("");
    setContent("");
    setFiles([]);
    setPreviews([]);



    //upload images to cloudinary
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(images.push(selectedFiles));
    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);

    

  };

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
      </div>
    </Container>
  );
};

export default AddPost;
