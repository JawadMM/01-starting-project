import React from "react";

const TabButton = ({children, onClick, isSelected}) => {

  const className = isSelected ?  "active" : ""

  return (
    <li>
      <button className={className} onClick={onClick}>{children}</button>
    </li>
  );
};

export default TabButton;
