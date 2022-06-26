import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from '../data'

// icons
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

// style
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex*-100}vw);
    transition: all 1s ease;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 50px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    cursor: pointer;
    display: grid;
    place-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props)=> props.direction === 'left' && '10px'};
    right: ${(props)=> props.direction === 'right' && '10px'};
    margin: auto;
    opacity: .5;
    z-index: 2;
`   

// end style

export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction='left' onClick={()=> handleClick('left')}>
                <ArrowBackIosNewOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems && sliderItems.map((item)=>(
                    <Slide key={item.id} bg={item.bg} >
                        <ImageContainer>
                            <Image src={item.img}/>
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
                {!sliderItems && <div>Data not found!</div>}
            </Wrapper>
            <Arrow direction='right' onClick={()=> handleClick('right')}>
                <ArrowForwardIosOutlinedIcon />
            </Arrow>
        </Container>
    )
}
