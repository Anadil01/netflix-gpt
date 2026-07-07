import { useState } from "react";
import Header from "./Header";

function Login() {
    const [isSignInForm , setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
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
        <form className="w-96 rounded-lg bg-black/80 p-10 shadow-2xl">
          <h1 className="mb-6 text-3xl font-bold text-white">{isSignInForm ? "Sign In" :"Sign Up"}</h1>
          

          {isSignInForm && <input
            type="Name"
            placeholder="Full Name"
            className="mb-4 w-full rounded bg-gray-700 p-3 text-white"
          /> }


          <input
            type="email"
            placeholder="Email Address"
            className="mb-4 w-full rounded bg-gray-700 p-3 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="mb-6 w-full rounded bg-gray-700 p-3 text-white"
          />

          <button className="w-full rounded bg-red-600 p-3 text-white hover:bg-red-700">
            Sign In
          </button>
          <p className="py-4 text-white" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Already have Account ? Sign In Now"}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;