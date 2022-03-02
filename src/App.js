import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './components/NavBar';
import ResponsiveAppBar from './components/NavBar';
import Home from './components/home/home'
import Footer from './components/Footer/Footer'
import Cities from './components/Cities/cities';
import Detalles from './components/Detalles/detalles'
import Scroll from './components/Scroll'
function App() {
  return (
      <BrowserRouter>
      <Scroll/>
      <ResponsiveAppBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cities' element={<Cities/>}/>
          <Route path="/detalles/:id" element={<Detalles/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
