import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`

   
`
const Container2 = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255, 0.5)), 
    url("https://media.idownloadblog.com/wp-content/uploads/2016/02/mountain-night-snow-dark-star-40-wallpaper-mod.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 30px;
    width: 40%;
    background-color: white;
`
const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`
const Input = styled.input`
    border: none;
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    background-color:#f1f1f1;
    padding: 15px;
    &:focus {
        border:none;
    }

   

`
const Button = styled.button`
    margin-top: 30px;
    padding: 15px 20px;
    width: 40%;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
    justify-content: center;
    
`

const Register = () => {
  return (
    
    <Container>
        <Navbar/>
        <Container2>

        <Wrapper>
            <Title>Create Account</Title>
            <Form>
                <Input placeholder = "username"/>
                <Input placeholder = "email"/>
                <Input placeholder = "password"/>
                <Input placeholder = "confirm password"/>
                <Link to ="/checkemail" style={{ textDecoration: 'none', color: 'black' }}><Button>Create Account</Button></Link>
            </Form>
        </Wrapper>
        </Container2>
    </Container>
  )
}

export default Register