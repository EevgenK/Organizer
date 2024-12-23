import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import CustomThemeSwitchBtn from "../sharedMui/CustomThemeSwitchBtn";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <nav className={clsx("container", s.navigation)}>
        <Navigation />
        <CustomThemeSwitchBtn />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;
