import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";
import { TextField } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useTheme } from "@emotion/react";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchFieldId = useId();
  const theme = useTheme();
  const { palette } = theme;
  const handleInput = (e) => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <label className={s.label} htmlFor={searchFieldId}>
      <p>
        <ManageSearchIcon fontSize="large" color="primary" />
        Find contacts by name or number
      </p>
      <TextField
        className={s.search}
        id="outlined-search"
        label="Search field"
        type="search"
        color="secondary"
        onChange={handleInput}
        slotProps={{
          inputLabel: {
            sx: {
              color: "var(--second-text-color)",
            },
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "var(--second-text-color)",
            "& fieldset": {
              borderColor: palette.secondary.main,
            },
            "&:hover fieldset": {
              borderColor: "var(--second-color)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--second-color)",
            },
          },
        }}
      />
    </label>
  );
};

export default SearchBox;
