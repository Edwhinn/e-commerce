import React, { useState, useEffect } from 'react'
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

const Paragraph = styled.p`
    font-weight: 400;
`

const Register = () => {

    const intialValues = {username: "", email:"", password:""}
    const [formValues, setFormValues] = useState(intialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handleChange =(e) =>{
        console.log(e.target)
        const{name, value} = e.target
        setFormValues({...formValues, [name]: value})
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
    }, [formErrors])

    const validate = (values) =>{
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if(!values.username){
            errors.username = "Username is required!"
        }
        if(!values.email){
            errors.email = "Email is required!"
        }   else if(!regex.test(values.email)){
            errors.email = "This is not a valid email!"
        }
        if(!values.password){
            errors.password = "Password is required!"
        }else if(values.password.length < 4){
            errors.password = "Password must be more than 4 characters"
        }else if(values.password.length > 30){
            errors.password = "Password must be less than 30 characters"
        }
        return errors;
    }

  return (
    
    <Container>
        <Navbar/>
        <Container2>

        <Wrapper>
            <Title>Create Account</Title>
            <Form onSubmit={handleSubmit}>
                
                <Input 
                placeholder = "Username *" 
                name="username" type="text" 
                 
                value={formValues.username}
                onChange={handleChange}/>

               
                <Input 
                placeholder = "Email *" 
                type="text" 
                name="email"
                value={formValues.email} 
                onChange={handleChange}/>
            
               

                <Input 
                placeholder = "Password (8 characters minimum) *" 
                type="password" 
                name="password"
                value={formValues.password}
                onChange={handleChange}
                />
               
                <Button type="submit">Create Account</Button>
                <br></br>
                <Paragraph>{formErrors.username}</Paragraph>
                <Paragraph>{formErrors.email}</Paragraph>
                <Paragraph>{formErrors.password}</Paragraph>
            </Form>
        </Wrapper>
        </Container2>
    </Container>
  )
}

export default Register