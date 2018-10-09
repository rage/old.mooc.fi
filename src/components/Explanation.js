import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import FancyExpansionPanel from "./FancyExpansionPanel";
import { Paper } from "@material-ui/core";

const ExplanationWrapper = styled(Paper)`
  max-width: 600px;
  z-index: 50;
  padding: 2rem;
  margin: 5rem 0;
  margin-top: 15rem;
  @media only screen and (min-width: 600px) {
    margin-top: 10rem;
    margin-left: 9rem;
  }
  margin-bottom: 0.1rem;
`;

const Explanation = styled.div`
  padding: 0.6rem 0;
`;

export default ({ texts }) => (
  <ExplanationWrapper>
    <Fragment>
      <Typography variant="h4">{texts.headlineContent}</Typography>
      <Explanation>
        <Typography variant="subtitle1">{texts.leadContent}</Typography>
      </Explanation>
      <FancyExpansionPanel items={texts.expansionPanelItems} />
    </Fragment>
  </ExplanationWrapper>
);
