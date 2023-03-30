import Cards from "./Articles/Cards";
import Footer from "./Footer";
import Nav from "./Nav";
import {useSelector } from 'react-redux';

const Home = () =>{

    return(
    <div>
       <Nav />
       <Cards />
       <Footer />
    </div>
    )};
export default Home;