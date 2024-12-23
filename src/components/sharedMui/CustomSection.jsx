import { Box } from "@mui/material";
import backGroundImg from "../../assets/img/bg.png.png";
const CustomSection = ({ children }) => {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        p: 2,
        border: "1px grey",
        backgroundColor: "primary.bg",
        backgroundImage: `url("${backGroundImg}")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </Box>
  );
};
export default CustomSection;
