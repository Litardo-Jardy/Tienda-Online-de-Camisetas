import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LittleCar from './Seccions/ComponentLitleCar/LittleCar';
import Home from './Seccions/Home';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/carrito" element={<LittleCar />} />
      </Routes>
    </Router>
  )};
  
export default App;
