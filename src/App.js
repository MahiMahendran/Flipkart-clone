import React, { useEffect } from 'react'
import './App.css';
import CreateNav from './Components/Navbar/CreateNav'
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product'
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import supabase from './Supabase';
import { setUser } from './Slice/Slice';

const App = () => {
  const dispatch = useDispatch();

  const getData = async ()=>{
    const {data,error} = await supabase.auth.getSession();
    dispatch(setUser(data.session.user)) 
  }
  useEffect(()=>{
    getData();
  },[]);
  return (
    <div>
      <BrowserRouter>
      <CreateNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='ProductDetails/:id' element={<ProductDetails/>}/>
        <Route path='Cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
