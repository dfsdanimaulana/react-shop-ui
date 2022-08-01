import { useState } from 'react'
import styled from "styled-components"
import { mobile } from "../responsive"

// components
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from "@mui/icons-material"

// style
const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
     ${mobile({
       flexDirection: "column",
       padding: "10px"
    })}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image  = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
     ${mobile({
        height: "40vh"
    })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
     ${mobile({
        padding: "10px"
    })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc  = styled.p`
    margin: 20px 0;
`
const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
     ${mobile({
        width: '100%'
    })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span``
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    font-size: 20px;
    font-weight: 200;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
     ${mobile({
        width: '100%'
    })}
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: grid;
    place-items: center;
    margin: 0 10px;

`
const Button = styled.button`
    cursor: pointer;
    padding: 7px 15px;
    border: 1px solid teal;
    background-color: #fff;
    font-weight: 500;
    
    &:hover {
        background-color: #f8f4f4;
    }
`

export default function Product() {

    const [amount, setAmount] = useState(1)

    const handleRemove = () => {
        amount > 1 && setAmount(amount - 1)
    }
    const handleAdd = () => {
        setAmount(amount + 1)
    }

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Denim Jumpsuit
                </Title>
                <Desc>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio minima molestias, adipisci eum recusandae accusantium quidem expedita excepturi placeat odit!
                </Desc>
                <Price>
                    $ 20
                </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color:</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size:</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                        
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={handleRemove} style={{ cursor: 'pointer'}}/>
                        <Amount>{amount}</Amount>
                        <Add onClick={handleAdd}  style={{ cursor: 'pointer'}}/>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}
