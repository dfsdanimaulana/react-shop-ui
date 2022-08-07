import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`
const Button = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
`
const Span = styled.span``

const KEY = 'pk_test_51LUB2EITZImlDekLQYIapGqweC8PR5qH6vJNCMqKFwG5jGYW6IotinGSpGGeyF5Q6sLrSQ0QBb2nkGlZKAbhVZX5003FHfM5Ik'

// CARD DETAILS 4242 4242 4242 4242 - Exp: 08/24 - CVV: 123

export default function Pay() {
   const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/checkout/payment', {
                    amount: 1000,
                    tokenId: stripeToken.id
                })
                console.log(response.data)
                navigate('/success')
            }
            catch (error) {
                console.log(error)
            }     
        }
       stripeToken && makeRequest()
        
    } , [stripeToken, navigate])

    return (
        <Container>
           
                {stripeToken ? (
                    <Span>Processing... please wait</Span>
                ): (
                     <StripeCheckout
                        name='Dan Shope'
                        image='https://github.com/dfsdanimaulana.png'
                        billingAddress
                        shippingAddress
                        description='Your total is $100'
                        amount={2000}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <Button onClick={onToken}>Pay</Button>
                    </StripeCheckout>
                )}
        </Container>
    )
}
