import { Add, Remove } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 400;
    font-size: 40px;
`
const Desc = styled.p`
    font-weight: 300;
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 40%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    align-items: center; 
    justify-content: center;
    margin: 0px 5px;
    
`
const Button = styled.button`
    padding: 8px;
    border: 2px solid black;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: black;
        color: white;
    }
`


const RedShirt01 = () => {

    const [active, setActive] = useState("Red")
    
  return (
    <Container>
        <Navbar/>

        <Wrapper>
            <ImgContainer>
            {active === "Blue" &&
                <Image src ="https://jiffyshirts1.imgix.net/4d2ca587609f68.png?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2" />
            }
            {active === "Red" &&
                <Image src ="https://www.transparentpng.com/thumb/shirt/ytM0vF-red-polo-tshirt-fron-view-t-shirt.png"/>
            }
            {active === "Yellow" &&
                <Image src ="https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/332Wx332H-422519-0320.jpg"/>
            }
            </ImgContainer>
            <InfoContainer>
                <Title>T-Shirt</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Desc>
                <Price>$ 10.99</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color:</FilterTitle>
                        <FilterColor color = "Yellow" onClick={()=> setActive("Yellow")}/>
                        <FilterColor color = "red" onClick={()=> setActive("Red")}/>
                        <FilterColor color = "blue" onClick={()=> setActive("Blue")}/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                    <FilterTitle>Amount</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption selected>1</FilterSizeOption>
                            <FilterSizeOption>2</FilterSizeOption>
                            <FilterSizeOption>3</FilterSizeOption>
                            <FilterSizeOption>4</FilterSizeOption>
                            <FilterSizeOption>5</FilterSizeOption>
                            <FilterSizeOption>6</FilterSizeOption>
                            <FilterSizeOption>7</FilterSizeOption>
                            <FilterSizeOption>8</FilterSizeOption>
                            <FilterSizeOption>9</FilterSizeOption>
                            <FilterSizeOption>10</FilterSizeOption>
                        </FilterSize>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>

        <Footer/>
    </Container>
  )
}

export default RedShirt01