import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsCart4 } from 'react-icons/bs';

const ComponentList = (prop) =>{
 
      const ComponentList = styled.div`
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 10px;
            background-color: #eee;
            margin: 7px;
            position: relative;
            top: 130px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            width: 100%;`

      const ID_Price_Amount = styled.p`
            font-size: 18px;
            color: #000;
            position: relative;
            top: -8px;
            font-family: 'Tilt Neon', cursive;
            width: 5%;`

      const Name = styled.h2`
            font-size: 23px;
            color: #000;
            font-family: 'Tilt Neon', cursive;
            position: relative;
            top: -9px;
            width: 15%;
            
            @media only screen and (max-width: 600px){
                  font-size: 18px;}`

     const ContainerImgReferent = styled.div`
            width: 15%;
            border: 1px #eee solid;
            border-radius: 10px;
            overflow: hidden;
            `

      const ImgReferent = styled.img`
            width: 50px;
            heigth: 50px;`

      const Delete = styled.div`
            width: 7%;
            position: relative;
            top: 14px;
            cursor: pointer;

            `

      return(
         <ComponentList>
               <ID_Price_Amount><strong> #{prop.id}</strong></ID_Price_Amount>

               <Name>{prop.name}</Name>

               <ContainerImgReferent>
                     <ImgReferent src={prop.imagen} />         
               </ContainerImgReferent>
 
               <ID_Price_Amount><strong>${prop.price}</strong></ID_Price_Amount>
               <ID_Price_Amount><strong>x{prop.amount}</strong></ID_Price_Amount>

               <Delete onClick={prop.click}><RiDeleteBin6Line  color="red" size="20" height="20" /></Delete>
               <Delete onClick={prop.add}><BsCart4 color="green" size="20" height="20" /></Delete>
               
         </ComponentList>

)};
export default ComponentList;