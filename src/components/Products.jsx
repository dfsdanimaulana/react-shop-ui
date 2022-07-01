import styled from "styled-components"
import { Product } from "./Product"
import { popularProducts } from "../data"

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Products = () => {
  return (
    <Container>
        {popularProducts && popularProducts.map(item => (
            <Product key={item.id} item={item} />
        ))}
        {!popularProducts && <div>Product nno found!</div>}
    </Container>
  )
}
