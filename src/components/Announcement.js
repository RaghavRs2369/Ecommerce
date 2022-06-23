
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;  
    display: flex;
    align-center; center;
    justify-content: center;
    font-size; 14px;
    font-weight; 500;   
`

const Announcement = () => {
  return (
    <Container>
        <center>
        Super Deal! Free  Shipping On  Orders  over $50
        </center>
    </Container>
  )
}

export default Announcement