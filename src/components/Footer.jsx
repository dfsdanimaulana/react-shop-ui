import styled from "styled-components"

// icons
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Map, Phone, MailOutline } from "@mui/icons-material";

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;  
    padding: 20px;  
`

const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    cursor: pointer;
    display: grid;
    place-items: center;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    & svg:first-child {
        fill: grey;
        margin-right: 10px;
    }
`

const Payment = styled.img`
    width: 50%;
`

export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>DAN.</Logo>
            <Desc>
                There are many variations of passages of lorem ipsum available, but the majority have suffered alternation in some form, by injected humor, or randomised words which don't look even slightly believable  
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookOutlinedIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful link</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem> 
                <ListItem>Help</ListItem> 
                <ListItem>Terms</ListItem> 
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Map /> West Java, Indonesia</ContactItem>
            <ContactItem> <Phone /> +62 823 2301 0004</ContactItem>
            <ContactItem> <MailOutline /> danimaulana9f@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}
