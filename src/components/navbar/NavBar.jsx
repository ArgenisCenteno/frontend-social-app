import "./navbar.scss"; 
import LogoutIcon from '@mui/icons-material/Logout';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const navigate = useNavigate()
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const handleLogout = async (e) =>{
    e.preventDefault();
    try {
      await logout();
      navigate("/login")
    } catch (err) {
        
    }
  }

  return (
    <div className='navbar'>
        <div className="left">
            <Link to='/' style={{textDecoration: 'none'}}> 
                <span>Social App</span>
                
            </Link>
            <HomeOutlinedIcon/>
            {darkMode ? (
            <WbSunnyOutlinedIcon onClick={toggle} />
             ) : (
           <DarkModeOutlinedIcon onClick={toggle} />
            )}
            <GridViewOutlinedIcon/>
            <div className="search">
            <SearchOutlinedIcon />
             <input type="text" placeholder="Search..." />
        </div>
         
        </div>
        <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <LogoutIcon onClick={handleLogout} />

        <div className="user">
           <img  src={"/upload/" + currentUser.profilePic} alt=""/> 
           <span>{currentUser.name}</span>
        </div>

       
        </div>
    </div>
  )
}

export default NavBar