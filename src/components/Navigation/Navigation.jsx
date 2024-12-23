import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import CabinIcon from "@mui/icons-material/Cabin";

import NavListServices from "./NavListServices/NavListServices";
import MenuButton from "../MenuButton/MenuButton";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <ul className={s.navigation}>
      {isLoggedIn && (
        <li className={s.menu}>
          <MenuButton />
        </li>
      )}
      <li>
        <NavLink className={s.link} to="/">
          <CabinIcon fontSize="large" color="primary" />
        </NavLink>
      </li>

      {isLoggedIn && (
        <li className={s.services}>
          <NavListServices />
        </li>
      )}
    </ul>
  );
};

export default Navigation;
