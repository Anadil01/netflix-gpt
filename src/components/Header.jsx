import { useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import {logo} from "../utils/constants";



function Header() {
  const location = useLocation();

  const user = useSelector((store) => store.user.user);
 
   
   const isBrowse = location.pathname === "/browse";
  

   const handleSignOut = ()=>{
    signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error(error);
    });
   }

    return (      
    <div className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center
          ${isBrowse ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
           <img className="w-40" src={logo} alt="Logo"/>
          
    {isBrowse && (
    <div className="flex items-center gap-4 text-white">
      <span>Welcome, {user?.displayName}</span>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
    )}
    </div> 

     );
}

export default Header;