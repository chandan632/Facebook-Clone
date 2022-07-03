import React from "react";
import "./LeftPanel.css";

function LeftPanel() {
  const items = [
    {
      itemName: "Friends",
      image: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
    },
    {
      itemName: "Groups",
      image: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
    },
    {
      itemName: "Marketplace",
      image: "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png",
    },
    {
      itemName: "Watch",
      image: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png",
    },
    {
      itemName: "Memories",
      image: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png",
    },
    {
      itemName: "Saved",
      image: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
    },
    {
      itemName: "Pages",
      image: "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
    },
    {
      itemName: "Events",
      image: "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png",
    },
    {
      itemName: "Most Recent",
      image: "https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/hTN47HVa4oS.png",
    },
  ];
  return (
    <div className="body-leftPanel">
      {items.map((item, index) => {
        return (
          <span key={index}>
            <img src={item.image} alt={item.itemName} />
            <label>{item.itemName}</label>
          </span>
        );
      })}
    </div>
  );
}

export default LeftPanel;
