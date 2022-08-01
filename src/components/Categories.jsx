import styled from "styled-components"
import { categories } from '../data'
import CategoryItem from "./CategoryItem"
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
     ${mobile({
        padding: '0',
        flexDirection: 'column',
    })}
`

export default function Categories() {
  return (
    <Container>
        {categories && categories.map(item => (
            <CategoryItem key={item.id} item={item}/>
        ))}
        {!categories && <div>Categories not found!</div>}
    </Container>
  )
}
