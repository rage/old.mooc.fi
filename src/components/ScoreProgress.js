import React from "react";
import styled from "styled-components";
import { LinearProgress, Typography } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled(Typography)`
  margin-right: 1rem !important;
  font-weight: normal !important;
`;

const Percentage = styled(Typography)`
  margin-left: 1rem !important;
  font-weight: normal !important;
`;

const StyledProgress = styled(LinearProgress)`
  flex: 1;
`;

export default ({ name, progress }) => (
  <Container>
    <Name>{name}</Name>

    <StyledProgress variant="determinate" value={progress} />
    <Percentage>{progress} %</Percentage>
  </Container>
);
