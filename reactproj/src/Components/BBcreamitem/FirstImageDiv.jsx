<<<<<<< Updated upstream
import React from 'react'
import styled from 'styled-components'
 
const FirstImage = styled.div`
*{
  margin:0rem;
  padding:0rem;
}
img{
  width:100%;
}
`


export const FirstImageDiv = () => {
  return (
    <FirstImage><img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt='Invalidimage'/></FirstImage>
  )
}
=======
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FirstImage = styled.div`
  * {
    margin: 0rem;
    padding: 0rem;
  }
  img {
    width: 100%;
  }
`;


export const FirstImageDiv = () => {
  const navigate =useNavigate();


  return (
    <FirstImage  onClick={()=>{navigate('/')}} >
  
      <img 
        src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg"
        alt="Invalidimage"
      />
  
    </FirstImage>
  );
};
>>>>>>> Stashed changes
