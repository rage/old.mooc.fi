import React from "react";
import LanguageContext, { languages } from "../contexes/LanguageContext";
import Language from "@material-ui/icons/Language";
import NavigationButton from "../components/NavigationButton";

export default () => (
  <LanguageContext.Consumer>
    {language =>
      language === languages.finnish ? (
        <NavigationButton to="/en">
          <Language />English version
        </NavigationButton>
      ) : (
        <NavigationButton to="/">
          <Language />Suomenkielinen versio
        </NavigationButton>
      )
    }
  </LanguageContext.Consumer>
);
