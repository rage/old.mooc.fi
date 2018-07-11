import React from "react";

import { Typography } from "@material-ui/core";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import LanguageContext, { languages } from "../../contexes/LanguageContext";

export default () => (
  <Typography variant="subheading">
    <LanguageContext.Consumer>
      {language =>
        language === languages.finnish
          ? "Kiitos listalle liittymisestä!"
          : "Thanks for joining the list!"
      }
    </LanguageContext.Consumer>
    <SentimentSatisfiedIcon />
  </Typography>
);
