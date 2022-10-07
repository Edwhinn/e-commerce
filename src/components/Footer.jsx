import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px, 0px;
`
const SocialContainer = styled.h1`
    display: flex;
`
const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #1d1d1d;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
`

const Title = styled.h3`

`

const List = styled.ul`

`

const ListItem = styled.li`

`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>VMD</Logo>
            <Desc>Limit Testing Space Limit Testing Space Limit Testing Space Limit Testing Space Limit Testing Space Limit Testing Space </Desc>
            <SocialContainer>
                <SocialIcon><Facebook/></SocialIcon>
                <SocialIcon><Instagram/></SocialIcon>
                <SocialIcon><Twitter/></SocialIcon>
                <SocialIcon><Pinterest/></SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Cheese</ListItem>
                <ListItem>Cheese</ListItem>
                <ListItem>Cheese</ListItem>
                <ListItem>Cheese</ListItem>
                <ListItem>Cheese</ListItem>
                <ListItem>Cheese</ListItem>
                <ListItem>Cheese</ListItem> 
            </List>
        </Center>
        <Right></Right>
    </Container>
  )
}

export default Footer