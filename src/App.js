import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Hi!"/>}
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Hi!"/>}
        />
        <Route
          path="/item/:id"
          element={<ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
