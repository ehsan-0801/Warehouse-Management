import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>
        <Route path="/home" element={ <Home></Home> }></Route>
        <Route path="/about" element={ <About></About> }></Route>
        <Route path="/inventory" element={ <Inventory></Inventory> }></Route>
        <Route path="/signup" element={ <Signup></Signup> }></Route>
        <Route path="/signin" element={ <SignIn></SignIn> }></Route>
        <Route path="*" element={ <NotFound></NotFound> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
