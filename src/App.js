
import './App.css';
import Header from './component/Header/Header';
import Filter from './component/Filter/Filter';
import { Route, Routes, useParams } from 'react-router-dom';
import ShowProduct from './component/ShowProduct/ShowProduct';
import Home from './component/Home/Home';
import AllProduct from './component/AllProduct/AllProduct';
import { useEffect, useState } from 'react';

function App() {
  /* let [ok,setOk]=useState(false)
  useEffect(()=>{
    const pathname=window.location.pathname
    console.log(pathname);
    if(pathname=='/all-products'){
      setOk=true;
    }else{
      setOk=false;
    }
  },[]) */
  

  return (
    <div>
      <Header></Header>
      {/* {
        ok?"hi":<Filter></Filter>
      } */}
      <Filter></Filter>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:pid' element={<ShowProduct></ShowProduct>}></Route>
        <Route path='/all-products' element={<AllProduct></AllProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
