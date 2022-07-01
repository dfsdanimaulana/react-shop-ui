import { Send } from "@mui/icons-material"
import styled from "styled-components"

// style 
const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 15px;
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`

export default function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder="Your email" />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}
