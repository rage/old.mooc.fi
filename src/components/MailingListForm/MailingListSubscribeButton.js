import React from "react";
import { Button } from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import styled from "styled-components";
import LanguageContext, { languages } from "../../contexes/LanguageContext";

const StyledButton = styled(Button)`
  margin-left: 1rem !important;

  svg {
    margin-left: 5px;
  }
`;

const MailingListSubscribeButton = ({ onClick }) => {
  return (
    <LanguageContext.Consumer>
      {language => (
        <StyledButton variant="contained" color="primary" onClick={onClick}>
          {language === languages.finnish ? "LIITY" : "SUBSCRIBE"}
          <Send />
        </StyledButton>
      )}
    </LanguageContext.Consumer>
  );
};

export default MailingListSubscribeButton;
