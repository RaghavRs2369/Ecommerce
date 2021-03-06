import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "styled-components"
import { ProductFiveAction } from "../redux/actions";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;  
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
     flex: 1;
     padding: 20px;
`;

const Title = styled.h3`
     margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    `;


const Right = styled.div`
    flex: 1; 
    padding: 20px;
`;
 
const ContactItem =styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center; 

`;

const Payment = styled.img`
    

`;

const Footer = () => {
    const dispatch = useDispatch()
    const baby = useSelector(state => state)
  return (
    <Container>
         <Left>
            <Logo>KNIGHTS.</Logo>
            <Desc>HI FRIENDS.</Desc>
            <SocialContainer>
                <SocialIcon  color="3B5999">
                    <Facebook/>
                </SocialIcon >
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <Button onClick={() => dispatch(ProductFiveAction())}>hello</Button>
            </SocialContainer>
         </Left>
         <Center>
            <Title>{baby}</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order  Tracking</ListItem>
            </List>
         </Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem>
              <Room style={{marginRight:"10px"}}  /> 3/45 NGO Colony , Adyar , Chennai
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 6375839854</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>raghu@wins.com</ContactItem>
            <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
         </Right>
    </Container>
  )
}

export default Footer