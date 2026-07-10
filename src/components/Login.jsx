import { useState , useRef } from "react";
import Header from "./Header";
import {ValidateData} from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import {auth} from "../utils/firebase";
import { mainimg } from "../utils/constants";

function Login() {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null); 
    
    

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

  const handleSubmit = async ()=>{
     
    const message = ValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      //Signup logic 
      try {
        const fullName = name.current.value;
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value, 
          password.current.value
        );
        await updateProfile(userCredential.user, {
          displayName: name.current.value,
        });
        await userCredential.user.reload();
        console.log("User Created:", userCredential.user);
        alert("Signup Successful!");
  
        // Clear the form
        name.current.value = "";
        email.current.value = "";
        password.current.value = "";
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email is already registered.");
            break;
          case "auth/invalid-email":
            alert("Please enter a valid email.");
            break;
          case "auth/weak-password":
            alert("Password must be at least 6 characters.");
            break;
          default:
            alert(error.message);
        }
      }

    }else{
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value, 
          password.current.value
        );
  
        console.log("Logged In:", userCredential.user);
        alert("Login Successful!");
  
        // Clear inputs
        email.current.value = "";
        password.current.value = "";
      } catch (error) {
        alert(error.message);
        console.error(error);
      }
   
    }

    

  }


  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={mainimg}
        alt="main img"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Form */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <form onSubmit={(e)=>e.preventDefault() } className="w-96 rounded-lg bg-black/80 p-10 shadow-2xl">
          <h1 className="mb-6 text-3xl font-bold text-white">{isSignInForm ? "Sign In" :"Sign Up"}</h1>
          

          {!isSignInForm && <input
            ref={name}
            type="Name"
            placeholder="Full Name"
            className="mb-4 w-full rounded bg-gray-700 p-3 text-white"
          /> }


          <input
             ref={email}
            type="email"
            placeholder="Email Address"
            className="mb-4 w-full rounded bg-gray-700 p-3 text-white"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mb-6 w-full rounded bg-gray-700 p-3 text-white"
          />
          <p className="text-red-500 font-bold m-1 ">{errorMessage}</p>

          <button onClick={handleSubmit}className="w-full rounded bg-red-600 p-3 text-white hover:bg-red-700 cursor-pointer">
            {isSignInForm ? "Sign In" :"Sign Up"}
          </button>
          <p className="py-4 text-white" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" :"Already have an account? Sign In"}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;