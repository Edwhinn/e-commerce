import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #c4c4b0;
    color:white;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
`;

const Announcement = () => {
  return (
    <Container>
            Super Deal! Free Shipping on Orders $50
    </Container>
  )
}

export default Announcement