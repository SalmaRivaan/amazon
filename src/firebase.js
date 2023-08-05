
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseApp = firebase.initializeApp({  
 apiKey: "AIzaSyAfU0gEQtSHQEIywoAIEUKvgV3LPWFQvNw",
  authDomain: "fir-9587a.firebaseapp.com",
  projectId: "fir-9587a",
  storageBucket: "fir-9587a.appspot.com",
  messagingSenderId: "157792477812",
  appId: "1:157792477812:web:eeb8bde8760870ac3ea721"
   
 
  measurementId: "G-3VVM8SL1DM"
});



const auth = firebase.auth();

export { auth };
