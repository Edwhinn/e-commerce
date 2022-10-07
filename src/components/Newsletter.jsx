import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30vh;
    background-color: #1D1D1D;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
    color: white;
`

const Desc = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 300;
    color: white;
`

const InputContainer = styled.div`
    width: 40%;
    height: 20%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    border: none;
`

const Input = styled.input`
    border: none;
    flex: 8;
`

const Button = styled.button`
    flex: 0.5;
    border: none;
    background-color: grey;
    color: black;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
            <Desc>Get updates on <strong>NEW</strong> upcoming products and <strong>sales</strong> </Desc>
        <InputContainer>
            <Input placeholder="Your email  "/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter