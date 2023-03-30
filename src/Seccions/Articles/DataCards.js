import styled from 'styled-components';
import data_cards from './data.json';
import ContainerData from './ContainerData';

const DataCards = () =>{

         const ContainerCardsTwo = styled.div`
               width:80%;
               display: flex;
               flex-wrap: wrap;
               justify-content: space-around;`
          
          const Cards = styled.div`
               display: flex;
               flex-wrap: wrap;
               justify-content: center;
               border: 2px solid #000;
               background-color: #eee;
               border-radius: 10px;
               width: 250px;
               margin: 40px;
               box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
               height: 350px;`
    
          const Image = styled.img`
               width: 230px;
               margin: 4px;
               height: 230px;
               overflow: hidden;
               border-radius: 8px;`
    
    
          const Data_Cards = data_cards
      return(
           <ContainerCardsTwo>
               {Data_Cards.map(data => 
                    <Cards key={data.id}>
                           <Image src={data.image} />
                           <ContainerData id={data.id} name={data.name} price={data.price} image={data.image} amount={0} />
                    </Cards>)}
           </ContainerCardsTwo>
      )
};
export default DataCards;