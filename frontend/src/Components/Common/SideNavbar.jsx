import { NavLink as Link } from "react-router-dom";
import Icon from "./Icon";

function Navlink({ children: label, icon, route }) {
  return (
    <Link className="nav-link flex items-center justify-start" to={route}>
      <div className="icon-container flex justify-center items-center">
        <Icon name={icon} />
      </div>
      <div className="nav-link-text whitespace-nowrap">{label}</div>
    </Link>
  );
}

function SideNavbar() {
  const navLinks = [
    { name: "home", icon: "house-chimney", route: "/" },
    { name: "importants", icon: "star", route: "/importants" },
    {
      name: "about us",
      icon: "address-card",
      route: "/about",
    },
  ];

  return (
    <div className="side-navbar h-full flex flex-col justify-between">
      <div>
        <div className="profile-icon flex items-center">
          <div className="flex justify-center items-center icon-container py-10">
            <div className="flex justify-center items-center overflow-hidden bg-[--secondary-color] w-10 h-10 rounded-[35%]"></div>
          </div>
        </div>
        {navLinks.map((link) => (
          <Navlink {...link} key={link.name}>
            {link.name}
          </Navlink>
        ))}
      </div>
      <div className="nav-link flex items-center">
        <div className="flex justify-center items-center icon-container py-10">
          <div className="flex justify-center items-center overflow-hidden bg-[--secondary-color] w-10 h-10 rounded-[35%]">
            <Icon name="right-from-bracket" />
          </div>
        </div>
        <div className="nav-link-text nav-link">logout</div>
      </div>
    </div>
  );
}

export default SideNavbar;
