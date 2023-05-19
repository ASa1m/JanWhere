import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function Caraousel(props) {
 const data = [];
 props.images.forEach(element => {
    data.push(
        {
            image: element,
            caption: ""
        }
    )
 }); 

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="Caraousel">
      <div style={{ textAlign: "center" }}>
       
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            className="postImg"
            data={data}
            time={2000}
       
            captionStyle={null}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="none"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
          
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Caraousel;