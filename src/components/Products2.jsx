import React from 'react'
import styled from 'styled-components'
import {productList} from '../data'
import Product2 from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`

const Products2 = () => {
  return (
    <Container>{productList.map(item => (
        <Product2 item={item} key={item.id} path={item.path}/>
    ))}

    </Container>
  )
}

export default Products2