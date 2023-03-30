import styled from 'styled-components';
import DataCards from './DataCards';

const Cards = () =>{
      
      const ContainerCards = styled.div`
            width:100% ;
            display: flex;
            flex-wrap: wrap;
            margin-top: 100px;
            justify-content: center;
            
            @media only screen and (max-width: 900px) {
                  margin-top: 200px;}`
      
      return(
            <ContainerCards>
                 <DataCards />
            </ContainerCards>
      )
};
export default Cards;