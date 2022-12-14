import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import Products from '../../components/Products'
import Footer from '../../components/Footer'
import Products2 from '../../components/Products2'


const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 20px; 
`

const Select = styled.select`
    padding: 5px;
    margin-right: 20px;
`

const Option = styled.option`

`


const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Catalog</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
                    <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Red</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    </Select>
                    <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    </Select>
            </Filter>
            <Filter><FilterText>Filter Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products2/>
        <Footer/>
    </Container>
  )
}

export default ProductList