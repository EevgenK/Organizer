import { Box } from "@mui/material";
import s from "./HomePage.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FaSmileWink } from "react-icons/fa";
import BenefitsList from "../../components/BenefitsList/BenefitsList";
import { benefits } from "./benefits";
import CustomSection from "../../components/sharedMui/CustomSection";

const HomePage = () => {
  return (
    <CustomSection>
      <div className={clsx("container", s.home)}>
        <div className={s.introduce}>
          <h1 className={s.title}>Phone book organizer</h1>
          <p>
            This is an organizer for phone numbers with access for only
            registered customers. So visit the{" "}
            <Link className={s.link} to="/register">
              {" "}
              Register page
            </Link>{" "}
            first. And get all functions and benefits provided by this app.
          </p>
          <BenefitsList title="This application provides:" items={benefits} />
          <p>
            In the nearest future this app is expected to provide more
            functions. <FaSmileWink />
          </p>
          <p>Enjoy by using the app and have a nice day! </p>
        </div>
      </div>
    </CustomSection>
  );
};

export default HomePage;
