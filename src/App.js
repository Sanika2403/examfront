
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components.js/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contactus from './pages/Contactus';
import Register from './pages/Register';
import Login from './pages/Login';
import Adminlogin from './pages/Adminlogin';
import Tests from './pages/Tests';
import Appeartest from './pages/Appeartest';
import Result from './pages/Result';
import Addcategory from './pages/Addcategory';
import Addquestions from './pages/Addquestions';
import Preparetest from './pages/Preparetest';
import Contactdetails from './pages/Contactdetails';
import Addtestque from './pages/Addtestque';
import Testpaper from './pages/Testpaper';
import Aresult from './pages/Aresult';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path='services' element={<Services />}></Route>
          <Route path='contact' element={<Contactus />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='adminlogin' element={<Adminlogin />}></Route>
          <Route path='tests' element={<Tests />}></Route>
          <Route path='appeartest' element={<Appeartest />}></Route>
          <Route path='result' element={<Result />}></Route>
          <Route path='addcategory' element={<Addcategory />}></Route>
          <Route path='addquestions' element={<Addquestions />}></Route>
          <Route path='preparetest' element={<Preparetest />}></Route>
          <Route path='testque/:testno' element={<Addtestque />}></Route>
          <Route path='contactdetails' element={<Contactdetails />}></Route>
          <Route path='testpaper/:testno' element={<Testpaper/>}></Route>
          <Route path='aresult' element={<Aresult />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
