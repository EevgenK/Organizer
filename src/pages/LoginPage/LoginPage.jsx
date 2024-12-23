import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

import { Link } from "react-router-dom";
import FormWrap from "../../components/sharedMui/FormWrap/FormWrap";
import CustomSection from "../../components/sharedMui/CustomSection";

const LoginPage = () => {
  return (
    <CustomSection>
      <FormWrap type="login" title="Sign In">
        <LoginForm />
        <p className={s.invite}>Don't have an account yet?</p>
        <Link className={s.link} to="/register">
          Go to Sign up
        </Link>
      </FormWrap>
    </CustomSection>
  );
};

export default LoginPage;
