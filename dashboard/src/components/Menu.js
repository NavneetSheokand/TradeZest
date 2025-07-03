import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import axios from 'axios';
const Menu=() => {
   
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(()=>{
        axios
        .get("http://localhost:3002/me", { withCredentials: true }) 
        .then((res) =>{
               setUsername(res.data.username)
        })
        .catch((err) => {
        console.error("User fetch error:", err);
      });
  }, []);
    
    const handleMenuClick = (index) =>{
        setSelectedMenu(index);
    };

    const handleProfileClick = (index) =>{
        setIsProfileDropDownOpen((prev) => !prev);
    };
     const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/login";
  };

    const menuClass ="menu";
    const activeMenuClass ="menu selected";
        

    return (
        <div className='menu-container'>
            <img src='logo.png' style={{width:"5%"}} />
            <div className='menus'>
                <ul>
                    <li><Link style={{textDecoration:"none"}} to="/" onClick={()=> handleMenuClick(0)}> <p className={selectedMenu===0 ? activeMenuClass: menuClass}>Dashboard</p></Link></li>
                    <li><Link style={{textDecoration:"none"}} to="/orders" onClick={()=> handleMenuClick(1)}> <p className={selectedMenu===1 ? activeMenuClass: menuClass}>Orders</p></Link></li>
                     <li><Link style={{textDecoration:"none"}} to="/holdings" onClick={()=> handleMenuClick(2)}> <p className={selectedMenu===2 ? activeMenuClass: menuClass}>Holdings</p></Link></li>
                     <li><Link style={{textDecoration:"none"}} to="/positions" onClick={()=> handleMenuClick(3)}> <p className={selectedMenu===3 ? activeMenuClass: menuClass}>Positions</p></Link></li>
                     <li><Link style={{textDecoration:"none"}} to="/funds" onClick={()=> handleMenuClick(4)}> <p className={selectedMenu===4 ? activeMenuClass: menuClass}>Funds</p></Link></li>
                     <li><Link style={{textDecoration:"none"}} to="/apps" onClick={()=> handleMenuClick(6)}> <p className={selectedMenu===6 ? activeMenuClass: menuClass}>Apps</p></Link></li>
                </ul>
                <hr />
                <div className='profile' onClick={handleProfileClick}>
                    <div className='avatar'>ZU</div>
                    <p className='username' >{username}</p> {isProfileDropDownOpen && <ProfileDropdown onLogout={handleLogout} />}
                </div>
            </div>
        </div>
      );
};

export default Menu;