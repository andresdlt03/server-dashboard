import { NavbarButton } from "./NavbarButton"

export const Navbar = () => {

  return (
    <div className="navbar__container">
      
      <div className="navbar__group">
        <NavbarButton iconName="home_icon.svg" />
        <NavbarButton iconName="server_icon.svg" />
        <NavbarButton iconName="app_icon.svg" />
        <NavbarButton iconName="alerts_icon.svg" />
      </div>

    </div>
  )
}
