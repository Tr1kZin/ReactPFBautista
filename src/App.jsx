import './App.css'
import {useState} from "react";
import ItemListContainer from './components/items-detalles/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/items-detalles/ItemDetailContainer";

import {Header} from './components/header/Header'

function App(){
  const [numerito , setNumerito] = useState (1);

  return (
    <BrowserRouter>
    <div>
       <Header numerito={numerito} setNumerito={setNumerito}/>
       
       <Routes>
       <Route path='/' element={<ItemListContainer/>}></Route>

       <Route path="/category/:categoryId" element={<ItemListContainer />}/>

        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>

       </Routes>
       
    </div>
    </BrowserRouter>
  )
}

export default App
