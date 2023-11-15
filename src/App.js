import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import AppNavbar from './components/NavComponent';
import { Cart } from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './contexts/CartContext';
import InfoContainer from './components/InfoComponent';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <InfoContainer />
        <AppNavbar />
        <Routes>
          <Route 
            path="/"
            element={<ItemListContainer greeting="Hi!" />}
          />
          <Route
            path="/cart"
            element={ <Cart />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Hi!" />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
