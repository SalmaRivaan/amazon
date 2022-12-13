import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
 
function App() {
 const  [{user},dispatch] =useStateValue();
 useEffect(() => {
  // will only run once when the app component loads...

   const unsubscribe = auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
  return ()=>{
    unsubscribe();
  }
}, []); 
  return (
    
    <Router>
    <div className="App">
   
      <Routes> 
      <Route exact path="/" element={<Home />}/>
    
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/checkout" element={<Checkout />}/>
       </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;