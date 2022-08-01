import styled from "styled-components"
import { mobile } from "../responsive"

// components
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

// style
const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
     ${mobile({
        margin: '0 20px',
        display: 'flex',
        flexDirection: 'column'
    })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
     ${mobile({
        marginRight: 0
    })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
     ${mobile({
        margin: '10px 0'
    })}
`
const Option = styled.option``

export default function ProductList() {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Red</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                 <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                 <FilterText>
                    Sort Products:
                </FilterText>
                 <Select>
                    <Option selected>Newest</Option>
                    <Option>Prize (asc)</Option>
                    <Option>Prize (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}
