import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/PubicallyPages/Home';
import Login from './Components/UserAuthentication/Login';
import Signup from './Components/UserAuthentication/Signup';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Auth from './Components/UserAuthentication/Auth';
import { ProductDetail } from './Components/ShoppingCart/ProductDetail';
import Mens from './Components/PubicallyPages/Mens';
import Women from './Components/PubicallyPages/Women';
import Kids from './Components/PubicallyPages/Kids';
import Shoes from './Components/PubicallyPages/Shoes';
import AuthAdmin from './Components/Admin/AuthAdmin';
import AdminPage from './Components/Admin/AdminPage';
import LoginAdmin from './Components/Admin/AdminAuthentication/LoginAdmin';
import SubmitPayment from './Components/ShoppingCart/SubmitPayment';
import 'react-toastify/dist/ReactToastify.css';
function App() {
 
  return (
    <div className='bg-light'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/UserLogin' element={<Login/>}/>
      <Route path='/productDetail/:id' element={<ProductDetail/>}/>
      <Route path='/UserSignup' element={<Signup/>}/>
      <Route path='/shoppingCart/:id' element={<Auth><ShoppingCart/></Auth>}/>
      <Route path='/SubmitPayment' element={<SubmitPayment/>}/>
      <Route path='/menCollection' element={<Mens/>}/>
      <Route path="/womenCollection" element={<Women/>}/>
      <Route path='/kidsCollection' element={<Kids/>}/>
      <Route path='/shoesCollection' element={<Shoes/>}/>
      <Route path='/Adminpage' element={<AuthAdmin><AdminPage/></AuthAdmin>}/>
      <Route path='/AdminLogin' element={<LoginAdmin/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
