import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: #1D1D1D;
    color: white;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: none;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 10px;
`;

const Input = styled.input`
    border:none;
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    
    margin-left: 25px;
`

const Navbar = () => {

  return (
    <Container>
    <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <Search style={{color:"gray", fontSize: 16, border: "1px light grey", marginLeft:"4px"}}/>
            </SearchContainer>
        </Left>

        <Center>
            <Logo>
                <Link to ="/" style={{ textDecoration: 'none', color: 'white' }}>VMD</Link>
            </Logo>
        </Center>

        <Right>
            <MenuItem><Link to = "/register" style={{ textDecoration: 'none', color: 'white' }}>REGISTER</Link></MenuItem>
            <MenuItem><Link to = "/login" style={{ textDecoration: 'none', color: 'white' }}>LOG IN</Link></MenuItem>
            <MenuItem>
            <Badge badgeContent="" color="secondary" variant="dot" overlap="circular">
                <ShoppingCartOutlined/>
            </Badge>
            </MenuItem>
        </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar