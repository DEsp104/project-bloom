import { NavLink } from "react-router-dom";
import bloomLogo from "../images/logos/project-bloom-logo.svg";

export default function Header() {
  return (
    <header className="headerArea">
      <img src={bloomLogo} alt="" />
      <nav>
        <ul>
          <li>
            <NavLink exact to={"/home"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to={"/search"}>
              Search Jobs
            </NavLink>
          </li>
          <li>
            <NavLink exact to={"/about"}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
