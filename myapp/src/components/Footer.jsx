import {  Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import NewsLetter from './NewsLetter';
const FooterContainer=styled.div`
width:50%;
margin: auto;
padding: 0 20px;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap-reverse;
font-family:cursive;
flex-direction:column;
`
const Logo=styled.div`
font-size: 16px;
font-weight: bold;
`
const SocialMedia=styled.div`
margin: 20px 150px;
&a{
    color: #000;
  font-size: 24px;
  text-decoration: none;
  transition: .6s;
};
&a:hover{
    color: gold;
};
`
let year=new Date().getFullYear();
const Footer = () => {
  return (
      <footer style={{display:"flex",background:"teal",padding:"5%",bottom:"0"}}>
        <NewsLetter />
      <FooterContainer>
        <Logo> <h1>CASH</h1></Logo>
          <SocialMedia>
            <a target="blank" href="https://twitter.com/a_cash_dixit"><Twitter /> </a>
            <a target="blank" href="https://www.instagram.com/a_cash_dixit27/"><Instagram /></a>
            <a target="blank" href="https://www.linkedin.com/in/akash-dixit-283220211/"><LinkedIn /></a>
          </SocialMedia>
          <p>Cash Network © {year} All Rights Reserved.</p>
        </FooterContainer>
    </footer>
  )
}

export default Footer
