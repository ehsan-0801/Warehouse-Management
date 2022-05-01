import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>
        <Route path="/home" element={ <Home></Home> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
