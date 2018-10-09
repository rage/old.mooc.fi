import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const AccountInfoContainer = styled.div`
  display: flex;
  padding: 1rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`;

export default () => (
  <AccountInfoContainer>
    <AccountCircle style={{ fontSize: 150, color: "#303030" }} />
    <Details>
      <Typography variant="h6">Henrik Nygren</Typography>
      <Typography variant="subtitle1">henrik@example.com</Typography>
    </Details>
  </AccountInfoContainer>
);
