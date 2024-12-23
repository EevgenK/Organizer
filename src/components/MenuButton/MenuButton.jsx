import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice";

const MenuButton = () => {
  const dispatch = useDispatch();
  const onHandleClick = () => {
    dispatch(openModal());
    console.log("click");
  };
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ p: "4px 6px" }}
      onClick={onHandleClick}
    >
      <MenuIcon sx={{ fontSize: "30px" }} />
    </IconButton>
  );
};

export default MenuButton;
