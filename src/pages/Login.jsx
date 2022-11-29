import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

const Container = styled.div`

`
const Container2 = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255, 0.5)), 
    url("https://www.jetsetter.com//uploads/sites/7/2018/04/LEMBjMgD.jpeg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 30px;
    width: 25%;
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
    margin: 10px 0px;
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

    &:hover{
        background-color: black;
        color: white;
    }
    margin-bottom: 10px;
`

const Cheese = styled.a`
    margin: 5px 0px ;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    
    <Container>
        <Navbar/>
        <Container2>

         <Wrapper>
            <Title>Sign In</Title>
            <br></br>
            <Form>
                <Input placeholder = "username"/>
                <Input placeholder = "password"/>
                <Button>LOGIN</Button>
                <Link style={{ textDecoration: 'none', color: 'black'}}>
                <Cheese>Forgot Password?</Cheese>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}> 
                <Cheese>Create a New Account</Cheese>
                </Link>
            </Form>
        </Wrapper>
        </Container2>
    </Container>
  )
}

export default Login