import { Badge, Button, IconButton } from '@mui/material';
import { Search , ShoppingCartOutlined} from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';





const Container = styled.div`
         height: 80px;
          `;
const Wrapper = styled.div`
         padding: 10px 20px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         `;
const Left = styled.div` 
          flex: 1;
          display: flex;
          align-items: center;
          `;
      
const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;
          
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
     font-size: 14px;
     cursor: pointer;
     margin-left: 25px;
     `


const Language = styled.span`
        font-size: 14px;
        cursor: pointer;
        `;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    `;
    
const Input = styled.input`
   border: none;
`;   



const Navbar = () => {

    let navigate = useNavigate()

    const clicked = () => {
        navigate('/register')
    }
    const cartClicked = () => {
        navigate('/cart')
    }
  return (
      <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray",fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>KNIGHTS.</Logo></Center>
            <Right>
                <MenuItem>
                   <Button variant='contained' color='info' onClick={clicked}>
                    
                    register
                   </Button>
                </MenuItem>
                <MenuItem>
                  <Button href='/signin' variant='contained' color='primary'>
                     signin
                  </Button>
                </MenuItem>
                <MenuItem>
               <IconButton onClick={cartClicked} >
               <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined  />
    </Badge>
               </IconButton>
                </MenuItem>
            </Right>
         
         </Wrapper>
      </Container>
       

  )
}

export default Navbar