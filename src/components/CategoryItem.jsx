import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    border-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

export default function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>
                {item.title}
            </Title>
            <Button>SHOW NOW</Button>
        </Info>
    </Container>
  )
}
