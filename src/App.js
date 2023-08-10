import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Hola"/>
    </>
  )
}

export default App;
