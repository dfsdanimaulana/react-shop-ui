import styled from 'styled-components'
import { mobile } from '../responsive'

// icons
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge'

// style
const Container = styled.div`
    height: 60px;
    ${mobile({
        height: '50px'
    })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
     ${mobile({
        padding: '10px 0'
    })}
`

const SearchContainer = styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
     ${mobile({
        display: 'none'
    })}
`

const Input = styled.input`
    border: none;
     ${mobile({
        width: '50px'
    })}
`

const Logo = styled.h1`
    font-weight: bold;
     ${mobile({
        fontSize: '25px'
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
     ${mobile({
        justifyContent: 'center',
        flex: 2
    })}

`
const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
     ${mobile({
        fontSize: '12px',
        marginLeft: '10px'
    })}
`

// end style

export default function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input placeholder='search'/>
                    <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>DAN.</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="success">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}
