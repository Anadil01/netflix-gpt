import { useState , useRef } from "react";
import Header from "./Header";
import {ValidateData} from "../utils/validate";

function Login() {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null); 
    
    

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }
    const email = useRef(null);
    const password = useRef(null);

  const handleSubmit =()=>{
     
    const message = ValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    

  }


  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2f42605e-e786-4a06-8612-ebc67c55ba6c/web/IN-en-20260629-TRIFECTA-perspective_76b17e8c-cff9-4c65-9938-08ca5029be6b_medium.jpg"
        alt="main img"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Form */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <form onSubmit={(e)=>e.preventDefault() } className="w-96 rounded-lg bg-black/80 p-10 shadow-2xl">
          <h1 className="mb-6 text-3xl font-bold text-white">{isSignInForm ? "Sign Up" :"Sign In"}</h1>
          

          {isSignInForm && <input
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
            {isSignInForm ? "Sign Up" :"Sign In"}
          </button>
          <p className="py-4 text-white" onClick={toggleSignInForm}>{isSignInForm ? "Already have Account ? Sign In Now" :"New to Netflix ? Sign Up Now "}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;