import { Box } from "@mui/material";
import s from "./TodosPage.module.css";
import MainTitle from "../../components/MainTitle/MainTitle";

const TodosPage = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        p: 2,
        backgroundColor: "var(--main--bg-color)",
      }}
    >
      <div className="container">
        <MainTitle text="todo list" />
      </div>
    </Box>
  );
};

export default TodosPage;
