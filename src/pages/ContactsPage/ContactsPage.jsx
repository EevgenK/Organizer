import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import LoaderApi from "../../components/LoaderApi/LoaderApi";
import ContactList from "../../components/ContactList/ContactList";

import s from "./ContactsPage.module.css";
import MainTitle from "../../components/MainTitle/MainTitle";
import CustomSection from "../../components/sharedMui/CustomSection";
import FormWrap from "../../components/sharedMui/FormWrap/FormWrap";
const ContactsPage = () => {
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <CustomSection>
      <div className="container">
        <MainTitle text="phone book" />
        <div className={s.contacts}>
          <FormWrap type="create" title="Create contact">
            <ContactForm />
          </FormWrap>
          <FormWrap>
            <SearchBox />
            {loading ? <LoaderApi /> : <ContactList />}
          </FormWrap>
        </div>
      </div>
    </CustomSection>
  );
};

export default ContactsPage;
