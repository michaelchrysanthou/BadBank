import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";


(function signup () {
  // Your web app's Firebase configuration, get it from your firebase project settings page on the General tab.
  const firebaseConfig = {
    apiKey: "AIzaSyBtXjSItk-vtsTznMz-XSNoqudlKB-l4Pw",
    authDomain: "badbank-66367.firebaseapp.com",
    projectId: "badbank-66367",
    storageBucket: "badbank-66367.appspot.com",
    messagingSenderId: "276620243521",
    appId: "1:276620243521:web:d468c25630eddaf7844cc0"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  // TODO: initialize provider for google auth
  const provider = new GoogleAuthProvider();

  console.log("app initialized...");

  /* 
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");
  const logout = document.getElementById("logout");
  const loggedInStatus = document.getElementById("loggedInStatus");
  const googlelogin = document.getElementById("googlelogin");
  */

/*
  login.addEventListener("click", (e) => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  */

  // signup
  signup.addEventListener("click", (e) => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  });



/*
  logout.addEventListener("click", (e) => {
    auth.signOut();
  });

*/

  // login state
  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      loggedInStatus.innerText = `You are logged in using the following email: ${firebaseUser.email}`;
      logout.style.display = "inline";
      login.style.display = "none";
      signup.style.display = "none";
      email.style.display = "none";
      password.style.display = "none";
      googlelogin.style.display = "none";
    } else {
      console.log("User is not logged in");
      loggedInStatus.innerText = "You are not yet logged in";
      login.style.display = "inline";
      signup.style.display = "inline";
      email.style.display = "inline";
      googlelogin.style.display = "inline";
      password.style.display = "inline";
      logout.style.display = "none";
    }
  });
})();

export default signup
