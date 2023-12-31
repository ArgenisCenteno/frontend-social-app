import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";

import {createBrowserRouter,Navigate,Outlet,RouterProvider, useNavigate,} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import 'animate.css';

const queryClient = new QueryClient()


function App() {

  const {currentUser} = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);


  //Layout
  const Layout = () => {
    return(
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar/>
        <div style={{display: 'flex'}}>
          <LeftBar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>
          
          <RightBar/>
        </div>
      </div>
      </QueryClientProvider>

    )
  } 

  //Protected route 


  const ProtectedRoute = ({children}) =>{

    if(!currentUser){
      return <Navigate to='/login' />
    }

    return children

  }

  //Routes
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout/></ProtectedRoute> ,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    }
  ]);

 

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
