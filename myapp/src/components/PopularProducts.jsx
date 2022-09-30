import React from 'react'
import { popularProducts } from '../data';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { ThumbUp } from '@material-ui/icons';
const Text = styled.div`
display:flex;
align-items:center;
  position: absolute;
  background-color: white;
  color: brown;
  opacity:0.5;
  &:hover{
    opacity:1;
    cursor:pointer;
    transform:scale(1.5);
  }
`;
const PopularProducts = () => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",padding:"20px",paddingTop:"0",marginTop:"-2%"}}>
      {popularProducts.map((ele)=>{
        return(
            <div style={{flex:"1",height:"40vh",minWidth:"280px" ,background:"lightgray",border:"1px white solid",display:"flex",alignItems:"center",justifyContent:"center"}} key={ele.id}>
                <img style={{width:"90%",height:"90%"}} src={ele.img}  alt="don"></img>
                <Text>
                    <ShoppingCartOutlined />
                    <Search />
                    <ThumbUp />
        </Text>
            </div>
        )
      })}
    </div>
  )
}

export default PopularProducts
