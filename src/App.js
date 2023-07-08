import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavPannel from './components/navPannel'
import Home from './pages/home';
import SignUp from './pages/signup';
import ContactUs from './pages/contact';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <NavPannel/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/contact' element={<ContactUs/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
