import './App.css';
import Header from './components/Header';
import Mockup_3 from './components/Mockup_3'
import Footer from './components/Footer';
import Cart from './components/Cart';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <>
    <Header />
    <Mockup_3 />
    <Footer />
    </>
      
  );
}

export default App;
