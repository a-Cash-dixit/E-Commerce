import React from "react";
import styled from "styled-components";
import Image1 from "../Images/pexels-monstera-6311476.jpg";
import Image2 from "../Images/pexels-josh-willink-286691.jpg";
import Image3 from "../Images/pexels-arina-krasnikova-7350868.jpg";
import Image4 from "../Images/pexels-anna-shvets-5325632.jpg";
import Image5 from "../Images/pexels-josh-willink-1690732.jpg";
import { Button } from "@material-ui/core";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  padding: 7% 0;
`;
const Text = styled.div`
display:flex;
justify:content:center;
align-items:center;
flex-direction:column;
  position: absolute;
  background-color: white;
  color: brown;
  opacity:0.5;
  &:hover{
    opacity:1;
    cursor:pointer;
  }
`;
const Categories = () => {
  return (
    <Container>
      <div
        style={{
          height: "50vh",
          width: "33.333333%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src={Image1}
          alt="Don"
        ></img>
        <Text>
          <h2>SHIRT STYLE</h2>
          <Button>SHOP NOW</Button>
        </Text>
      </div>
      <div
        style={{
          height: "50vh",
          width: "33.333333%",
          background: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src={Image3}
          alt="Don"
        ></img>
        <Text>
          <h2>LONGWEAR</h2>
          <Button>SHOP NOW</Button>
        </Text>
      </div>
      <div
        style={{
          height: "50vh",
          width: "33.333333%",
          background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src={Image2}
          alt="Don"
        ></img>
        <Text>
          <h2>TIGHT JEANS</h2>
          <Button>SHOP NOW</Button>
        </Text>
      </div>
      <div
        style={{
          height: "50vh",
          width: "50%",
          background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src={Image4}
          alt="Don"
        ></img>
        <Text>
          <h2>NEW DRESSES</h2>
          <Button>SHOP NOW</Button>
        </Text>
      </div>
      <div
        style={{
          height: "50vh",
          width: "50%",
          background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src={Image5}
          alt="Don"
        ></img>
        <Text>
          <h2>LIGHT JACKETS</h2>
          <Button>SHOP NOW</Button>
        </Text>
      </div>
    </Container>
  );
};

export default Categories;
