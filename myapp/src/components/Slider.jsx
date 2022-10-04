import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../Images/pexels-pixabay-157675.jpg";
import Image2 from "../Images/pexels-evg-kowalievska-1055691.jpg";
import Image3 from "../Images/pexels-andrea-piacquadio-994234.jpg";
import Image4 from "../Images/pexels-terje-sollie-298863.jpg";
import styled from "styled-components";
const Container = styled.div`
  max-height: 500px;
  padding:10px 0px;
  font-family:cursive;
`;
const Button = styled.button`
  background-color: khaki;
  color: teal;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  font-family:cursive;
`;
const Slider = () => {
  return (
    <Container>
      <Carousel dynamicHeight={true} showThumbs={false} interval={30000} autoPlay={true} infiniteLoop={true}>
        <div style={{display:"flex",fontFamily:"cursive"}}>
            <div style={{flex:"1",fontFamily:"cursive"}}>
                <img style={{height:"85vh"}} src={Image2} alt="cashedin" />
            </div>
            <div style={{color:"white", flex:"2",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"teal"}}>
                <h1 style={{fontFamily:"cursive"}}>WINTER SALE</h1>
                <h4 style={{fontFamily:"cursive"}}>Don't compromise on style.Get 30% OFF! For new arrivals.</h4>
                {/* <button style={{cursor:"pointer"}} >Shop Now</button> */}
                <Button>Shop Now</Button>
            </div>
        </div>
        <div style={{display:"flex"}}>
        <div style={{flex:"1"}}>
                <img style={{height:"85vh"}} src={Image1} alt="cashedin" />
            </div>
            <div style={{ color:"white", flex:"2",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"teal"}}>
                <h1>AUTUMN SALE</h1>
                <h4>Don't compromise on style.Get 30% OFF! For new arrivals.</h4>
                <Button>Shop Now</Button>
            </div>
        </div>
        <div style={{display:"flex"}}>
            <div style={{flex:"1"}}>
                <img style={{height:"85vh"}} src={Image3} alt="cashedin" />
            </div>
            <div style={{color:"white", flex:"2",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"teal",justifyContent:"center"}}>
                <h1>SPRING SALE</h1>
                <h4>Don't compromise on style.Get 30% OFF! For new arrivals.</h4>
                <Button>Shop Now</Button>
            </div>
        </div>
        <div style={{display:"flex"}}>
        <div style={{flex:"1"}}>
                <img style={{height:"85vh"}} src={Image4} alt="cashedin" />
            </div>
            <div style={{color:"white", flex:"2",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"teal"}}>
                <h1>SUMMER SALE</h1>
                <h4>Don't compromise on style.Get 30% OFF! For new arrivals.</h4>
                <Button>Shop Now</Button>
            </div>
        </div>
      </Carousel>
    </Container>
  );
};

export default Slider;
