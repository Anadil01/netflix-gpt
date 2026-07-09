import { useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";




function Header() {
  const location = useLocation();

  const user = useSelector((store) => store.user.user);
  console.log(user);
   
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
           <img className="w-40" src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVBEN9I57czDc_uW4ZnDTNTb9hWvK70hYAqf0VNv_dsufIxZqfNclKrp7ugn5j0DkKCYy_4ncEpi6fJk1wpPuLO61r5YUWiEbVjxFpCESIWdJwAAOvAX.svg" alt="Logo"/>
          
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