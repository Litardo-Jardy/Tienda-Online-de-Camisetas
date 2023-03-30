import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../Styles/Nav.css';
import { useSelector } from 'react-redux';

const Nav = () =>{
      
     const Container = styled.div`
           background-color: #eee;
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           overflow: hidden;            
           top: 0; 
           position: fixed;
           z-index: 1;
           font-family: 'Tilt Neon', cursive;
           box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); 
           width: 100%;

           @media only screen and (max-width: 900px) {
               height: 200px;}`

     const Logo = styled.img`
           border: 1px solid #000;
           border-radius: 50%;
           width: 75px;
           height: 75px;`
    
    const Number = styled.p`
           color: red;
           font-size: 15px;
           position: relative;
           top: -30px;
           left: 70px;
    `

     const Span = styled.span`
           position: relative;
           top: -30px;
           left: 10px;
           color #000;
           margin: 5px;
           font-size: 35px;

           @media only screen and (max-width: 900px) {
               position: relative;
                top: 0px;}`

    const selector = useSelector(state => state.counter)
    let   counter = 0
    const Amounts = selector.map(element => counter += element.amount)
  
      return(
           <Container>
               <div className='container-logo'>
                   <Logo src='https://png.pngtree.com/png-vector/20200311/ourlarge/pngtree-alphabet-letter-j-with-ornaments-vintage-decoration-png-image_2155352.jpg' />
                   <Span>- Jarpril</Span>
               </div>

               <div className='container-link'>
                  <NavLink  className='link' to="/">Inicio</NavLink>
                  <NavLink className='link' to="/carrito">Carrito{ selector.length > 0 ? <Number>{selector.length  + counter }</Number>: null} </NavLink>
               </div>
           </Container>)}

export default Nav;