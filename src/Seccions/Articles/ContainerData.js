import styled from 'styled-components';
import { useDispatch} from 'react-redux';
import { setLittleCar } from '../../counterSlice';

const ContainerData = (prop) =>{

      
      const ContainerData = styled.div`
            width: 90%;
            margin: 5px;
            border-top: 1.5px solid #000;
            display: flex;
            flex-wrap: wrap;` 
 
       const NameTeam = styled.h2`
            font-family: 'Slabo 27px', serif;
            font-size: 25px;
            position: relative;
            bottom: 6px;
            width: 100%;`
       
       const Price = styled.p`
             font-family: 'Tilt Neon', cursive;
             font-size: 16px;
             position: relative;
             bottom: 32px;
             width: 43%;`
             
       const Button = styled.button`
             font-family: 'Tilt Neon', cursive;
             background-color:  none;
             font-size: 17px;
             border: none;
             border-radius: 8px;
             height: 30px;
             position: relative;
             bottom: 20px;
             cursor: pointer;
             width: 57%;
             &:hover{
               background-color: #3CB371;
               transition: 0.6s;
               box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);}`

      const dispatch = useDispatch()

      return(
               <ContainerData>

        <NameTeam>{prop.name}</NameTeam>
        <Price>Precio: <strong>${prop.price}</strong></Price>
        <Button onClick={
            () => dispatch(setLittleCar( 
            { id: prop.id, name: prop.name, price: prop.price, image: prop.image, amount: prop.amount} 
        ))} > Añadir al carro</Button>

               </ContainerData>
      )};
export default ContainerData;