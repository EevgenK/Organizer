import { Box } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import s from "./FormWrap.module.css";
import clsx from "clsx";
const FormWrap = ({ children, title, type }) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.bgTr",
      }}
      className={clsx(type === "create" ? `${s.fixed} ${s.box}` : s.box)}
      component="div"
    >
      <Box className={s.wrap} component="div">
        {type === "login" && <LoginIcon fontSize="large" color="primary" />}
        {(type === "register" || type === "create") && (
          <AppRegistrationIcon fontSize="large" color="primary" />
        )}
        <h1 className={s.title}>{title}</h1>
      </Box>
      {children}
    </Box>
  );
};

export default FormWrap;
