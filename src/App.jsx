import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from "./components/Body";
import Login from './components/Login';
import Browse from './components/Browse';
import Header from './components/Header';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/login",
      element:<Login/>

    },
    {
    
    path:"/browse",
    element:<Browse/>
    }
   
  
  ])


  return (
    <RouterProvider router={router}/>
  )
};

export default App
