import { Box } from "@mui/material";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import FormWrap from "../../components/sharedMui/FormWrap/FormWrap";
import CustomSection from "../../components/sharedMui/CustomSection";

const RegistrationPage = () => {
  return (
    <CustomSection>
      <FormWrap type="register" title="Sign Up">
        <RegistrationForm />
      </FormWrap>
    </CustomSection>
  );
};

export default RegistrationPage;
