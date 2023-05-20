import React, { useState } from 'react';
import { TextField, Button, Container, Typography , Chip} from '@mui/material';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [tags, setTags] = useState([
    { id: 1, name: 'Lion', selected: false },
    { id: 2, name: 'Tiger', selected: false },
    {id: 3, name: 'Elephant', selected: false},
    {id: 4, name: 'Snake', selected: false},
    {id: 5, name: 'Panda', selected: false},
    {id: 6, name: 'Human', selected: false}
  ]);

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
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Files:', files);
    setTitle('');
    setContent('');
    setFiles([]);
    setPreviews([]);

  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
  };


  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Add Post
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: '60%' }}>
        <TextField
  label="Title"
  variant="outlined"
  fullWidth
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  margin="normal"
  InputLabelProps={{
    shrink: true,
    style: { color: 'white' },
  }}
  InputProps={{
    style: { color: 'white' },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
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
    style: { color: 'white' },
  }}
  InputProps={{
    style: { color: 'white' },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
    },
  }}
/>
<br></br>
<br></br>

          <input type="file" onChange={handleFileChange} multiple style={{display:'none'}}
          id='choosebutton'
          />
          <label htmlFor='choosebutton'>
          <Button
    variant="contained"
    component="span"
    color="primary"
    sx={{
      backgroundColor: 'grey', 
      color: 'white', 
      '&:hover': {
        backgroundColor: 'blue', 
      },
    }}
  >
    Choose File
  </Button>
          </label>

          <br></br>
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap' }}>
  {tags.map((tag) => (
    <Chip
      key={tag.id}
      label={tag.name}
      onClick={() => handleTagClick(tag)}
      color={tag.selected ? 'primary' : 'default'}
      style={{
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
        backgroundColor: tag.selected ? 'blue' : 'gray',
        color: 'white',
        '&:hover': {
          backgroundColor: 'blue',
          color: 'white',
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
        <div
          style={{
            position: 'absolute',
            top: 100,
            right: -200,
            width: '40%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
        >
          <div>
            {previews.map((previewUrl) => (
              <img
                src={previewUrl}
                alt="Preview"
                key={previewUrl}
                style={{ maxHeight: '200px', marginRight: '10px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddPost;
