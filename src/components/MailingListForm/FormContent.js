import React from "react";
import FormControl from "@material-ui/core/FormControl";
import MailingListSubscribeButton from "./MailingListSubscribeButton";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import LanguageContext, { languages } from "../../contexes/LanguageContext";

const StyledTextField = styled(TextField)``;

export default ({ formRef, handleSubmit }) => (
  <form
    ref={formRef}
    action="https://mooc.us8.list-manage.com/subscribe/post?u=db82662e446284fd41bd8370e&amp;id=46d3d4ede3"
    method="post"
    name="mc-embedded-subscribe-form"
    target="_blank"
    noValidate
  >
    <FormControl>
      <LanguageContext.Consumer>
        {language => (
          <StyledTextField
            label={
              language === languages.finnish
                ? "Sähköpostiosoite"
                : "Email address"
            }
            name="EMAIL"
          />
        )}
      </LanguageContext.Consumer>
    </FormControl>
    <MailingListSubscribeButton
      onClick={() => {
        formRef.current.submit();
        handleSubmit();
      }}
    />
  </form>
);
