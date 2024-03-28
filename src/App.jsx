import {Routes, Route} from 'react-router-dom';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


import Home from "./view/Home";
import Contact from "./view/Contact";
import Car from "./view/Car";
import Catalogo from './view/Catalogo';
import DetalleProduc from './view/DetalleProducto'


import NotFound from "./view/NotFound";

export default function App() {
  return <>
  <Navbar/>
    <main>
      <Routes>
        <Route  path= "/"  element={<Home/>}  />
        <Route  path= "/contact" element={<Contact/>}/>
        <Route  path= "/car"     element={<Car/>}/>
        <Route  path= "/Catalogo"     element={<Catalogo/>}/>
        <Route path="/detalleProduct/:id" element={<DetalleProduc />} />
        <Route  path= "/*"      element={<NotFound/>}/>
      </Routes>
    </main>
  <Footer/>
  </>
}
