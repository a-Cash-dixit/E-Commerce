import { PlayArrowRounded } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
`;
const Email = styled.input`
  width: 80%;
  height: 40px;
  font-weight: 900;
  font-family:cursive;
`;
const Button = styled.button`
  width: 20%;
  cursor: pointer;
  background: khaki;
`;
const Form = styled.div`
  display: flex;
`;
const NewsLetter = () => {
  return (
    <Container>
      <form>
        <h1 style={{fontFamily:"cursive"}}>NEWSLETTER SIGNUP</h1>
        <p style={{fontFamily:"cursive", color: "lightgray", fontWeight: "900" ,lineHeight:"18px"}}>
          No spam, unsubscribe at any time.
        </p>
        <Form>
          <Email type="email" placeholder="Your Email"  />
          <Button>
            <PlayArrowRounded />
          </Button>
        </Form>
      </form>
    </Container>
  );
};

export default NewsLetter;
