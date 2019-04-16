import React, { useContext } from "react";
import usePromise from "react-use-promise";
import { userDetails } from "../../services/moocfi";
import LanguageContext from "../../contexes/LanguageContext";
import FinnishInstructions from "./FinnishInstructions";
import EnglishInstructions from "./EnglishInstructions";

const languageToInstructions = {
  finnish: FinnishInstructions,
  english: EnglishInstructions
};

export default ({ courseDetails }) => {
  const [details, error, state] = usePromise(() => userDetails(), []);
  const language = useContext(LanguageContext);
  if (state !== "resolved") {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Network error. Please reload the page.</div>;
  }
  const email = details.email;
  const InstructionsImpl = languageToInstructions[language];
  return <InstructionsImpl courseDetails={courseDetails} email={email} />;
};
