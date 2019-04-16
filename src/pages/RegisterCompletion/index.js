import React, { useContext, useState } from "react";
import { get } from "lodash";
import styled from "styled-components";

import withLayout from "../../layout/withLayout";
import Container from "../../components/Container";
import { Typography } from "@material-ui/core";
import CompletionConstants from "../../constants/CompletionConstants";
import LanguageContext, { languages } from "../../contexes/LanguageContext";
import PleaseSignIn from "./PleaseSignIn";
import Instructions from "./Instructions";
import { loggedIn } from "../../services/moocfi";

const StyledContainer = styled(Container)`
  margin-top: 1rem;
  margin-bottom: 20rem;
`;

const StageToComponent = {
  0: PleaseSignIn,
  1: Instructions
};

const RegisterCompletion = props => {
  let initialStage = 0;
  if (loggedIn()) {
    initialStage = 1;
  }
  const [stage, setStage] = useState(initialStage);
  const lang = useContext(LanguageContext);
  const courseSlug = get(props, "match.params.course_slug");
  const courseDetails = get(CompletionConstants, `${courseSlug}.${lang}`);
  const Component = StageToComponent[stage];
  const onStageComplete = () => {
    setStage(stage + 1);
  };
  return (
    <StyledContainer>
      <Typography variant="h4" component="h1">
        {lang === languages.finnish
          ? "Opintopisteiden rekisteröinti"
          : "Getting ECTS credits"}
      </Typography>
      <p>
        {lang === languages.finnish
          ? "Olet suorittanut kurssin The Elements of AI. Jos sinulla on suomalainen henkilötunnus, saat kurssista kahden opintopisteen laajuisen suoritusmerkinnän Helsingin yliopiston opintorekisteriin. Helsingin yliopiston avoin yliopisto hoitaa suoritusten rekisteröinnin. Opintosuorituksen rekisteröinti on ilmaista."
          : "You have completed the course The Elements of AI. If you have a Finnish Personal identity number/ code you can earn 2 ECTS credits from the University of Helsinki. The University of Helsinki Open University is responsible for registering the study credits. Registration of the ECTS is free of charge."}
      </p>

      <p>
        {lang === languages.finnish
          ? "Nyt sinun tulee ilmoittautua Helsingin yliopiston avoimeen yliopistoon, jotta voimme rekisteröidä suorituksesi."
          : "Now you have to enroll to the course through the University of Helsinki Open univeristy to complete the registration process."}
      </p>
      <Component
        onStageComplete={onStageComplete}
        courseDetails={courseDetails}
      />
    </StyledContainer>
  );
};

export default withLayout(RegisterCompletion, false);
