import "./../assets/styles/SideBar.css";
import { BsFillBoxFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div id="SideBar">
        <ul>
          <li>
            <span>
              <BsFillBoxFill />
            </span>
            <NavLink to="/">Product Section</NavLink>
          </li>
          <li>
            <span>
              <BiCategory />
            </span>
            <NavLink to="/category">Category Section</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
