import Nav from "../Nav"
import styled from 'styled-components';
import { useSelector, useDispatch} from 'react-redux';
import { deleteComponentLitleCar, addLittleCar } from "../../counterSlice";
import ComponentList from "./ComponentList";
import TitleLittleCar from "./TitleLittleCar";
import Footer from "../Footer";

const LittleCar = () =>{

     const ContainerLittleCard = styled.div`
           display: flex;
           justify-content: center;`

     const ContainerLCTwo = styled.div`
           width: 80%;
           border-radius: 10px;
           display: flex;
           flex-wrap: wrap;
           margin-top: 150px;
           justify-content: center;
           
           @media only screen and (max-width: 900px){
                   width: 90%; 
                   margin-top: 230px;}
           @media only screen and (max-width: 600px){
                        width: 95%;}`

      const NotElement = styled.h1`
            position: relative;
            font-family: 'Tilt Neon', cursive;
            top: 105px;`

      const selector = useSelector(state => state.counter)
      const dispatch = useDispatch()

      const Total = () => { 
            let total = 0;
            selector.map(num => total = total + parseInt(num.price) * (num.amount+1));
            return total;}
      return(
        <ContainerLittleCard>
           <Nav />
           <ContainerLCTwo>
              <TitleLittleCar total={Total()} />
               { selector.length != 0 ?
               selector.map(element => 
                         <ComponentList 
                           id={selector.indexOf(element)+1}
                           key={element.id} 
                           name={element.name} 
                           price={element.price}
                           imagen={element.image}
                           amount={element.amount +1}
                           add={() => dispatch(addLittleCar(element.id))}
                           click={() => dispatch(deleteComponentLitleCar(element.id))}
                         />
                ): <NotElement>No hay elementos agregados</NotElement>}
               

           </ContainerLCTwo>
           
        </ContainerLittleCard>
      )};
export default LittleCar;