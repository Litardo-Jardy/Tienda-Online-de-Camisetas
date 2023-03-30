import styled from 'styled-components';
import { MdOutlinePayment } from 'react-icons/md';

const TitleLittleCar = (prop) =>{
     
     const ContainerTitle = styled.div`
           width: 100%;
           display: flex;
           flex-wrap: wrap;
           background-color: #fff;
           heigth: 200px;
           margin-top: -42px;
           position: fixed;
           z-index: 1;
           justify-content: space-between`

     const Total = styled.p`
           font-size: 25px;
           text-align: center;
           position: relative;
           top: 50px;
           font-family: 'Tilt Neon', cursive;
           width: 40%;`

     const Buy = styled.p`
           font-size: 30px;
           text-align: center;
           font-family: 'Tilt Neon', cursive;
           cursor: pointer;
           width: 40%;
           position: relative;
           right: 20px;
           top: 40px;`

     const IconPay = styled.div`
           position: relative;
           top: -30px;
           right: -55px;
     `

      return(
         <ContainerTitle>
             <Total>Total: <strong>${prop.total}</strong></Total>
             <Buy>Pagar <IconPay><MdOutlinePayment color="green" size="30" /></IconPay></Buy>
         </ContainerTitle>
      )};
export default TitleLittleCar;