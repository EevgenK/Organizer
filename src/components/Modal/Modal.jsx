import { createPortal } from "react-dom";
import IconButton from "@mui/material/IconButton";
import s from "./Modal.module.css";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal/slice";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

const modalRoot = document.querySelector("#modal-root");
const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const handleCloseModal = useCallback(
    ({ target, currentTarget, key }) => {
      if (target === currentTarget || key === "Escape") {
        dispatch(closeModal());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleCloseModal);
    return () => {
      document.removeEventListener("keydown", handleCloseModal);
      document.body.style.overflow = "auto";
    };
  }, [handleCloseModal]);

  return createPortal(
    <div className={s.overlay} onClick={handleCloseModal}>
      <Box
        sx={{ backgroundColor: "primary.bgTr" }}
        className={s.modal}
        component="div"
      >
        <IconButton
          onClick={() => dispatch(closeModal())}
          size="small"
          aria-label="close"
          color="secondary"
          sx={{
            border: "1px solid",
            width: "fit-content",
            m: "0 0 0 auto",
            transition: "color var(--animation-mode)",
            "&:hover": { color: "var(--second-color)" },
          }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </div>,
    modalRoot
  );
};

export default Modal;
