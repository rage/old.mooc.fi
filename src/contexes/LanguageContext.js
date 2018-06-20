import React, { createContext, Component } from "react";

export const languages = {
  finnish: "finnish",
  english: "english"
};

const defaultValue = languages.finnish;

const LanguageContext = createContext(defaultValue);

export const withContext = (Children, language) => {
  return class extends Component {
    render() {
      return (
        <LanguageContext.Provider value={language}>
          <Children />
        </LanguageContext.Provider>
      );
    }
  };
};

export default LanguageContext;
