import styled from 'styled-components';

const Footer = () =>{

      const ContainerFooter = styled.div`
            width: 100%;
            background-color: #eee;
            text-align: center;
            padding-bottom: 5px;
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75)`

      const H1 = styled.h1`
            font-size: 15px;
            padding-top: 10px;
            font-family: 'Tilt Neon', cursive;`
      return(
        <ContainerFooter>
               <H1>@Jarpril 2023 - 2024</H1>
        </ContainerFooter>
      )
};

export default Footer;