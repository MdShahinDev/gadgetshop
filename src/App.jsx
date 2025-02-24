import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './temp/Home';
import Shop from './temp/Shop';
import Product from './temp/Product';
import Wishlist from './temp/Wishlist';
import MyAccount from './temp/MyAccount';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product' element={<Product />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/my-account' element={<MyAccount />} />
      </Routes>
    </div>
  );
}

export default App;
