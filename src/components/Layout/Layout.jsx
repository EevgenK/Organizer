import AppBar from "../AppBar/AppBar";
import Modal from "../Modal/Modal";
import ChangeCard from "../ChangeCard/ChangeCard";
import { useSelector } from "react-redux";
import { selectModal } from "../../redux/modal/selectors";
import Footer from "../Footer/Footer";
import { selectCurrentItem } from "../../redux/contacts/selectors";

import Confirm from "../ConfirmDelete/ConfirmDelete";
import { useCallback, useEffect, useState } from "react";

import ArrowButton from "../ArrowButton/ArrowButton";
import NavListServices from "../Navigation/NavListServices/NavListServices";
import CustomMuiColors from "../sharedMui/CustomMuiColors";

const Layout = ({ children }) => {
  const modalOpen = useSelector(selectModal);
  const currentItemType = useSelector(selectCurrentItem);
  const [modalContent, setModalContent] = useState(null);

  const checkCurrentItemType = useCallback(() => {
    if (!currentItemType) return <NavListServices />; /* IMPROVE */

    switch (currentItemType.type) {
      case "edit":
        return <ChangeCard />;
      case "delete":
        return <Confirm />;
      default:
        return null;
    }
  }, [currentItemType]);
  useEffect(() => {
    if (modalOpen) {
      setModalContent(checkCurrentItemType());
    } else {
      setModalContent(null);
    }
  }, [checkCurrentItemType, modalOpen]);

  return (
    <>
      <CustomMuiColors>
        <AppBar />
        {children}
        <Footer />
        <ArrowButton />
        {modalOpen && <Modal>{modalContent}</Modal>}
      </CustomMuiColors>
    </>
  );
};

export default Layout;
