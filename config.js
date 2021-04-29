 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6Ti1ys4GdEuR4NsdGg_BL8MkvBwpqPM4",
  authDomain: "attendence-app-803b9.firebaseapp.com",
  databaseURL: "https://attendence-app-803b9-default-rtdb.firebaseio.com",
  projectId: "attendence-app-803b9",
  storageBucket: "attendence-app-803b9.appspot.com",
  messagingSenderId: "250056296660",
  appId: "1:250056296660:web:7461bf0bd1667902c95341"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

  export default firebase.database();

 

 
 
 

  