import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import Placeholder from '../../placeholder-image.png';

function Caraousel(props) {
 const data = [];
 if (props.images){
  props.images.forEach(element => {
    data.push(
        {
            image: element,
            caption: ""
        }
    )
 }
);
  }
  else{
    data.push(
      {
        image: Placeholder,
        caption: "No caption"
      }
    )
  }

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="Caraousel mt-4">
      <div style={{ textAlign: "center" }}>
       
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            className="postImg"
            data={data}
            time={2000}
            captionStyle={captionStyle}
            radius="5px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="none"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            width = "100%"
          
          />
        </div>
      </div>
    </div>
  );
}

export default Caraousel;