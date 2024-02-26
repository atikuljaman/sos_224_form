import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.jpg";
import franceFlag from "../../assets/france-flag.png";
import britainFlag from "../../assets/britain-flag.png";

import "./Nav.css";

const Nav = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook
  const [toggleLang, setToggleLang] = useState(false);

  const handleToggleLang = (lang) => {
    if (lang === "fr") {
      setToggleLang(true);
    } else if (lang === "en") {
      setToggleLang(false);
    }
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="nav">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>

        <div className="center-nav">
          <h2>{t("pageHeading")}</h2>
          <p>{t("pageDesc")}</p>
        </div>

        <div className="btns">
          <button
            className={toggleLang && "active"}
            onClick={() => handleToggleLang("fr")}
          >
            <img src={franceFlag} alt="" />
            FR
          </button>
          <button
            className={!toggleLang && "active"}
            onClick={() => handleToggleLang("en")}
          >
            <img src={britainFlag} alt="" />
            EN
          </button>
        </div>
      </div>

      {/* Mobile center nav */}
      <div className="mobile-center-nav">
        <h2>{t("pageHeading")}</h2>
        <p>{t("pageDesc")}</p>
      </div>
    </>
  );
};

export default Nav;
