import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/theme/selectors";
import CssBaseline from "@mui/material/CssBaseline";
import { light } from "@mui/material/styles/createPalette";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d5f5f4",
      bg: "var(--main--bg-color)",
      hover: "var(--second-color)",
      bgTr: "var(--main--bgTr-color)",
    },

    secondary: {
      main: "#d5f5f4",
      bg: "var(--second--bg-dark-color)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: "var(--animation-mode)",
          color: "var(--second-text-color)",
          backgroundColor: "var(--main-color)",
        },
      },
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(11, 4, 43)",
      bg: "#ffffff",
      hover: "var(--second-color)",
      bgTr: "var(--second--bgTr-color)",
    },

    secondary: {
      main: "#d5f5f4",
      bg: "var(--second--bg-light-color)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: "var(--animation-mode)",
          color: "var(--main--bg-color)",
          backgroundColor: "var(--main-light-color)",
        },
      },
    },
  },
});
const CustomMuiColors = ({ children }) => {
  const isDarkMode = useSelector(selectTheme);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default CustomMuiColors;
