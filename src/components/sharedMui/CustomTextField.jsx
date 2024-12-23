import { InputAdornment, TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import { useTheme } from "@mui/material/styles";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const CustomTextField = ({ id, error, name, label, type, valid }) => {
  const theme = useTheme();
  const { palette } = theme;
  return (
    <Field
      autoComplete="off"
      color="secondary"
      error={error}
      id={id}
      type={type}
      name={name}
      label={label}
      as={TextField}
      fullWidth
      variant="outlined"
      margin="normal"
      helperText={<ErrorMessage name={name} component="span" />}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {valid && <CheckRoundedIcon color="success" />}
            </InputAdornment>
          ),
        },

        inputLabel: {
          sx: {
            color: "var(--second-text-color)",
          },
        },
        formHelperText: {
          sx: {
            color: "red",
          },
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: valid
            ? "var(--complete-input-color)"
            : "var(--main-color)",
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
  );
};
export default CustomTextField;
