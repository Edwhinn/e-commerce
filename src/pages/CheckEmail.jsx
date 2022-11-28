import React from 'react'
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
    width: 25%;
    background-color: white;
`
const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 300;
`





const CheckEmail = () => {
  return (
    <Container>
        <Navbar/>
        <Container2>

         <Wrapper>
            <Title>Check Email!</Title>
            <p>You have successfully made your account with VMD Clothing Brand! Please check your email for more information.</p>
        
        </Wrapper>
        </Container2>
        </Container>
  )
}

export default CheckEmail;