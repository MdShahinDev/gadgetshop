import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Wishlist from './Pages/Wishlist';
import MyAccount from './Pages/MyAccount';
import Cart from './Pages/Cart';

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
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
