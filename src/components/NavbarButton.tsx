import React from "react";
import { useNavigate } from "react-router-dom";

interface NavbarButtonProps {
  iconName: string,
}

export const NavbarButton : React.FC<NavbarButtonProps> = ({iconName}) => {

  const navigate = useNavigate();
  const name = iconName.split("_")[0];

  return (
    <div className="navbar__button">
      <img 
        src={`./src/assets/icons/${iconName}`} 
        alt=""
        onClick={() => navigate(`${name}`)}
      />
    </div>
    
  )
}
