import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-content:center;
justify-content: center;
`
const CheckOutBox = styled.div`
    height: 100vh;
    width: 20%;
    outline: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
`

const UserInformation = styled.div`
    height: 100vh;
    width: 30%;
    outline: 1px solid brown;
`

const PriceContainer = styled.div`
    width: 90%;
    height: 50%;
    outline: 1px solid black;
    display: flex;
    justify-content: end;
    flex-direction: column;

`





const ShoppingCart = () => {
  return (
    <>
        <Navbar/>
        <Container>
            <UserInformation></UserInformation>
            <CheckOutBox>
               <PriceContainer>
                <p>Sale</p> 
                <p>Tax</p>
                <br></br>
                <p>Total Cost</p>
               </PriceContainer>
            </CheckOutBox>
        </Container>
        <Footer/>
    </>
  )
}

export default ShoppingCart