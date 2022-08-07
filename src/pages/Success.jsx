import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`
const Button = styled.button`
    background-color: #7d98f1;
    color: #fff;
    border: none;
    padding: 20px 40px;
    border-radius: 8px;
    font-size: 1.2rem;
    cursor: pointer;

`
export default function Success() {
  return (
    <Container>
      <Button>
        Successful
      </Button>
    </Container>
  )
}
