import React from "react";
import mainStrings from "../Localization/mainStrings"

export const Navigation = (props) => {
  const [currentLanguage, setCurrentLanguage] = React.useState("en");
  const handleLanguageSwitch = () => {
    setCurrentLanguage(currentLanguage === "en" ? "ar" : "en");
  };
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Deminsion
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a className="navbar-brand page-scroll" href="#Features">
              {currentLanguage === "en" ? mainStrings.en.Features : mainStrings.ar.Features}
              </a>
            </li> */}
            <li>
            <a className="navbar-brand page-scroll" href="#About">
              {currentLanguage === "en" ? mainStrings.en.About : mainStrings.ar.About}
              </a>
            </li>
            <li>
            <a className="navbar-brand page-scroll" href="#Services">
              {currentLanguage === "en" ? mainStrings.en.Services : mainStrings.ar.Services}
              </a>
            </li>
            <li>
            <a className="navbar-brand page-scroll" href="#portfolio">
              {currentLanguage === "en" ? mainStrings.en.Gallery : mainStrings.ar.Gallery}
            </a>
            </li>
            <li>
            <a className="navbar-brand page-scroll" href="#Testimonials">
              {currentLanguage === "en" ? mainStrings.en.Testimonials : mainStrings.ar.Testimonials}
              </a>
            </li>
            <li>
            <a className="navbar-brand page-scroll" href="#Team">
              {currentLanguage === "en" ? mainStrings.en.Team : mainStrings.ar.Team}
              </a>
            </li>
            <li>
            <a className="navbar-brand page-scroll" href="#Contact">
              {currentLanguage === "en" ? mainStrings.en.Contact : mainStrings.ar.Contact}
              </a>
            </li>
            <li>
              <button id="langBtn" className="text-center" onClick={handleLanguageSwitch}>
                {currentLanguage === "en" ? "AR" : "EN"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
