import React from "react";
import FormControl from "@material-ui/core/FormControl";
import MailingListSubscribeButton from "./MailingListSubscribeButton";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import LanguageContext, { languages } from "../../contexes/LanguageContext";

const FieldWrapper = styled.div`
  display: flex;
`;

const StyledFormControl = styled(FormControl)`
  flex: 1;
`;

export default ({ formRef, handleSubmit }) => (
  <form
    ref={formRef}
    action="https://mooc.us8.list-manage.com/subscribe/post?u=db82662e446284fd41bd8370e&amp;id=46d3d4ede3"
    method="post"
    name="mc-embedded-subscribe-form"
    target="_blank"
    noValidate
  >
    <FieldWrapper>
      <StyledFormControl>
        <LanguageContext.Consumer>
          {language => (
            <TextField
              label={
                language === languages.finnish
                  ? "Sähköpostiosoite"
                  : "Email address"
              }
              name="EMAIL"
            />
          )}
        </LanguageContext.Consumer>
      </StyledFormControl>
      <MailingListSubscribeButton
        onClick={() => {
          formRef.current.submit();
          handleSubmit();
        }}
      />
    </FieldWrapper>
  </form>
);
