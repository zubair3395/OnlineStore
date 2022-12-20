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

// admin
import Sidebar from "./Components/Admin/components/sidebar/Sidebar";
import Topbar from "./Components/Admin/components/topbar/Topbar";
import Dashboard from "./Components/Admin/pages/dashboard/Dashboard";
import { Router, Switch } from "react-router-dom";
import UserList from "./Components/Admin/pages/userList/UserList";
import User from "./Components/Admin/pages/user/User";
import NewUser from "./Components/Admin/pages/newUser/NewUser";
import ProductList from "./Components/Admin/pages/productList/ProductList";
import Product from "./Components/Admin/pages/product/Product";
import NewProduct from "./Components/Admin/pages/newProduct/NewProduct";

function App() {
  return (
    <div className='bg-light'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/UserLogin' element={<Login/>}/>
      <Route path='/productDetail/:id' element={<ProductDetail/>}/>
      <Route path='/UserSignup' element={<Signup/>}/>
      <Route path='/shoppingCart' element={<Auth><ShoppingCart/></Auth>}/>
      <Route path='/menCollection' element={<Mens/>}/>
      <Route path="/womenCollection" element={<Women/>}/>
      <Route path='/kidsCollection' element={<Kids/>}/>
      <Route path='/shoesCollection' element={<Shoes/>}/>
    </Routes>

    {/* admin */}
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/admin" element={<Dashboard />}/>
          <Route path="/admin/users" element={<UserList />}/>
          <Route path="/admin/user/:userId" element={<User />}/>
          <Route path="/admin/newUser" element={<NewUser />}/>
          <Route path="/admin/products" element={<ProductList />}/>
          <Route path="/admin/product/:productId" element={<Product />}/>
          <Route path="/admin/newproduct" element={<NewProduct />}/>
        </Switch>
      </div>
    </Router>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
