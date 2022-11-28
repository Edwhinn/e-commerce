import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
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
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;    
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const payment = styled.img`

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
                <ListItem>@</ListItem>
                <ListItem>@</ListItem>
                <ListItem>@</ListItem>
                <ListItem>@</ListItem>
                <ListItem>@</ListItem>
                <ListItem>@</ListItem>
                <ListItem>@</ListItem> 
            </List>
        </Center>
        <Right>
            <Title>Contact Information</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>560 Santa Clara Lane North Miami Beach, FL 33160</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+1 234 5678</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>VMDclothing@official.com</ContactItem>

        </Right>
    </Container>
  )
}

export default Footer