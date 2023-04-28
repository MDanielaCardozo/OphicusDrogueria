import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/common/Menu';
import Home from './components/views/Home';
import QuienesSomos from './components/views/QuienesSomos';
import Servicios from './components/views/Servicios';
import Distribucion from './components/views/Distribucion';
import SumateAlEquipo from './components/views/SumateAlEquipo';
import Contacto from './components/views/Contacto';
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/quienesSomos' element={<QuienesSomos></QuienesSomos>}></Route>
        <Route exact path='/servicios' element={<Servicios></Servicios>}></Route>
        <Route exact path='/distribucion' element={<Distribucion></Distribucion>}></Route>
        <Route exact path='/sumateAlEquipo' element={<SumateAlEquipo></SumateAlEquipo>}></Route>
        <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
