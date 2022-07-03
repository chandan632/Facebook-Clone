import React, {useState} from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Header.css";

const Header = (props) => {
  const [elementClassName, setElementClassName] = useState('home');
  const [rightPanlElementClassName, setRightPanlElementClassName] = useState('');

  const menuClickHandler = (elementClass, rightPanel = false) => {
    if(!rightPanel){
      document.querySelector(`.${elementClassName}`).classList.remove('active');
      document.querySelector(`.${elementClass}`).classList.add('active');
      setElementClassName(elementClass);
    } else{
      if(rightPanlElementClassName){
        document.querySelector(`.${rightPanlElementClassName}`).classList.remove('activeRightPanel');
      }
      if(!['header', 'body'].includes(elementClass)){
        document.querySelector(`.${elementClass}`).classList.add('activeRightPanel');
        setRightPanlElementClassName(elementClass);
      }
    }
  }

  
  const showTooltip = (evt, text) => {
    let tooltip = document.querySelector("#tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.left = evt.pageX - 50 + 'px';
    tooltip.style.top = evt.pageY + 10 + 'px';
  }
  
  const hideTooltip = () => {
    document.querySelector("#tooltip").style.display = "none";
  }


  return (
    <div className="Header" onClick={() => menuClickHandler('header', true)}>
      <div className="leftPart">
        <FacebookOutlinedIcon className="facebook-icon" title="Facebook" />
        <label className="searchFacebookBox">
          <SearchOutlinedIcon className="search-icon" title="Search" />
          <input name="Search Facebook" placeholder="Search Facebook" className="search-facebook-input" />
        </label>
      </div>
      <div className="middlePart">
        <HomeRoundedIcon title="Home" className="home active" onClick={() => menuClickHandler('home')} onMouseMove={(event) => showTooltip(event, 'Home')} onMouseOut={hideTooltip} />
        <SmartDisplayRoundedIcon title="Watch" className="watch" onClick={() => menuClickHandler('watch')} onMouseMove={(event) => showTooltip(event, 'Watch')} onMouseOut={hideTooltip} />
        <StoreRoundedIcon title="Marketplace" className="marketplace" onClick={() => menuClickHandler('marketplace')} onMouseMove={(event) => showTooltip(event, 'Marketplace')} onMouseOut={hideTooltip} />
        <SportsEsportsRoundedIcon title="Gaming" className="gaming" onClick={() => menuClickHandler('gaming')} onMouseMove={(event) => showTooltip(event, 'Gaming')} onMouseOut={hideTooltip} />
      </div>
      <div className="rightPart">
        <SettingsIcon title="Menu" className="menu" onClick={() => menuClickHandler('menu', true)} onMouseMove={(event) => showTooltip(event, 'Menu')} onMouseOut={hideTooltip} />
        <MessageIcon title="Messenger" className="messenger" onClick={() => menuClickHandler('messenger', true)} onMouseMove={(event) => showTooltip(event, 'Messenger')} onMouseOut={hideTooltip} />
        <NotificationsActiveIcon title="Notifications" className="notifications" onClick={() => menuClickHandler('notifications', true)} onMouseMove={(event) => showTooltip(event, 'Notifications')} onMouseOut={hideTooltip} />
        <AccountCircleIcon title="Your Player" className="profile" onClick={() => menuClickHandler('profile', true)} onMouseMove={(event) => showTooltip(event, 'Your Profile')} onMouseOut={hideTooltip} />
      </div>
      <div id="tooltip" display="none" style={{position: "absolute", display: "none"}}></div>
    </div>
  );
}

export default Header;
