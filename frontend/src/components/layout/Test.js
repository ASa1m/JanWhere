
import React, {useState} from "react";
import Gallery from "./Gallery";
import { Typography, TextField, Button, Box } from '@material-ui/core';
import Share from "./Share"

function Test() {
  const animalDFShare = {
    description: "The tiger is the largest species among the Felidae.",
    image: "https://source.unsplash.com/200x200/?tiger"
  }
  
  return (
    <>
      {/* <Gallery /> */}
      <Share obj={animalDFShare}/>
    </>
  );
}

export default Test;
