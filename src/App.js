
import './App.css';
import Header from './component/Header/Header';
import Filter from './component/Filter/Filter';
import { Route, Routes } from 'react-router-dom';
import ShowProduct from './component/ShowProduct/ShowProduct';
import Home from './component/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Filter></Filter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:pid' element={<ShowProduct></ShowProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
