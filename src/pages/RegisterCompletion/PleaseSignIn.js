import React, { useContext } from "react";
import SignIn from "../../components/SignIn";
import LanguageContext, { languages } from "../../contexes/LanguageContext";

const PleaseSignIn = ({ courseDetails, onStageComplete }) => {
  const lang = useContext(LanguageContext);
  return (
    <div>
      <p>
        {lang === languages.finnish
          ? `Ensiksi kirjaudu alta sisään.`
          : `First, please log in.`}
      </p>
      <SignIn onComplete={onStageComplete} />
      <p>
        {lang === languages.finnish ? "Jos et muista salasanaasi, voit käydä nollaamassa sen kurssimateriaalista: ": "If you cannot remember your password, you can reset it through the course material: "}

        <a href={courseDetails.materialUrl}>{courseDetails.materialUrl}</a>
      </p>
    </div>
  );
};

export default PleaseSignIn;
