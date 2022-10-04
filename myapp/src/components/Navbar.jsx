import React from "react";
import styled from "styled-components";
import { Search,ShoppingCartOutlined } from "@material-ui/icons";
import  {Badge}  from "@material-ui/core";
const Container = styled.div`
  height: 60px;
  width:100%;
  font-family:cursive;
`;
const Wrapper = styled.div`
padding:5px 10px;
  display: flex;
  justify-content: space-between;
  font-family:cursive;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-family:cursive;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-family:cursive;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  font-family:cursive;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
  font-family:cursive;
`;
const Input = styled.input`
  border: none;
  font-family:cursive;
`;
const Logo = styled.h1`
  font-weight: 400;
  font-family:cursive;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items:center;
  font-family:cursive;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  font-family:cursive;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>CASH.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOG IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
