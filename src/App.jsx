
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import MyAccount from './pages/MyAccount';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product' element={<Product/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/my-account' element={<MyAccount/>} />
      </Routes>

    </div>
  );
}

export default App;
