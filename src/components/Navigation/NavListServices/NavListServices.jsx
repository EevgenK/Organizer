import { useDispatch, useSelector } from "react-redux";
import s from "./NavListServices.module.css";
import { NavLink } from "react-router-dom";
import { selectModal } from "../../../redux/modal/selectors";
import { closeModal } from "../../../redux/modal/slice";

const NavListServices = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModal);
  const onHandleCloseModal = () => {
    if (!isModalOpen) return;
    dispatch(closeModal());
  };
  return (
    <ul className={s.list}>
      <li>
        <NavLink className={s.link} to="/contacts" onClick={onHandleCloseModal}>
          contacts
        </NavLink>
      </li>
      {/* <li>
        <NavLink className={s.link} to="/todos" onClick={onHandleCloseModal}>
          todos
        </NavLink>
      </li> */}
    </ul>
  );
};

export default NavListServices;
