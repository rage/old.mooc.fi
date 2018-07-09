import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MailingListSubscribeButton from "./MailingListSubscribeButton";
import styled from "styled-components";
import Header from "./Header";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import LanguageContext, { languages } from "../contexes/LanguageContext";

const MailingList = styled.div`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: #f6f9fc;
  border-bottom: 2px solid rgba(207, 215, 223, 0.25);
`;

const StyledCard = styled(Card)`
  min-height: 15rem;
  min-width: 40rem;
  padding: 2rem;
`;

const StyledHeader = styled(Header)`
  margin-bottom: 2rem !important;
`;

const StyledInput = styled(Input)`
  width: 23rem;
`;

class MailingListForm extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { sent: false };
  }
  render() {
    let content;
    if (this.state.sent) {
      content = (
        <Typography variant="subheading">
          Kiitos listalle liittymisestä! <SentimentSatisfiedIcon />
        </Typography>
      );
    } else {
      content = (
        <form
          ref={this.formRef}
          action="https://mooc.us8.list-manage.com/subscribe/post?u=db82662e446284fd41bd8370e&amp;id=46d3d4ede3"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <FormControl>
            <LanguageContext.Consumer>
              {language => (
                <InputLabel>
                  {language === languages.finnish
                    ? "Sähköpostiosoite"
                    : "Email address"}
                </InputLabel>
              )}
            </LanguageContext.Consumer>
            <StyledInput name="EMAIL" />
          </FormControl>
          <MailingListSubscribeButton
            onClick={() => {
              this.formRef.current.submit();
              this.setState({ sent: true });
            }}
          />
        </form>
      );
    }
    return (
      <LanguageContext.Consumer>
        {language => (
          <MailingList>
            <StyledCard>
              <CardContent>
                <StyledHeader variant="headline">
                  {language === languages.finnish
                    ? "Haluatko ilmoituksia uusista kursseista?"
                    : "Get notified of new courses"}
                </StyledHeader>
                <div>{content}</div>
              </CardContent>
            </StyledCard>
          </MailingList>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default MailingListForm;
