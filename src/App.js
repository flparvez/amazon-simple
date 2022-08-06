import './App.css';

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import ProductDetails from './components/ProductDetails/ProductDetails';
// import Shipment from './components/Shipment/Shipment';
// import Login from './components/Login/Login';
// import { createContext } from 'react';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {

  // const [loggedInUser, setLoggedInUser] = useState({});
  return (

 
  <div>


     <Header></Header>

     <BrowserRouter>
    <Routes>
   
      <Route path="/" element={<Shop/>} />
      <Route exaxt path="/shop" element={<Shop/>} />

      <Route path="/review" element={<Review></Review>} />

      {/* <PrivateRoute path='/inventory' element={<PrivateRoute></PrivateRoute>} />
      <PrivateRoute path='/login' element={<Login></Login>} />
      <PrivateRoute path='/shipment' element={<Shipment></Shipment>} /> */}

      <Route path="/inventory" element={<Inventory></Inventory>} />

        <Route path="/product/:productKey" element={<ProductDetails/>} />

       <Route path='*' element={<Notfound></Notfound>} />
    </Routes>
  </BrowserRouter>

    


</div>
  );
}

export default App;
