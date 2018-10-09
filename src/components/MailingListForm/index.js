import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LanguageContext, { languages } from "../../contexes/LanguageContext";
import FormContent from "./FormContent";
import ThanksForJoining from "./ThanksForJoining";

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
  width: 90%;
  max-width: 40rem;
  padding: 1rem;
  margin: 0 1rem;
`;

const StyledHeader = styled(Header)`
  margin-bottom: 2rem !important;
`;

class MailingListForm extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { sent: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ sent: true });
  }

  render() {
    return (
      <LanguageContext.Consumer>
        {language => (
          <MailingList>
            <StyledCard>
              <CardContent>
                <StyledHeader variant="h5">
                  {language === languages.finnish
                    ? "Haluatko ilmoituksia uusista kursseista?"
                    : "Get notified of new courses"}
                </StyledHeader>
                <div>
                  {this.state.sent ? (
                    <ThanksForJoining />
                  ) : (
                    <FormContent
                      formRef={this.formRef}
                      handleSubmit={this.handleSubmit}
                    />
                  )}
                </div>
              </CardContent>
            </StyledCard>
          </MailingList>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default MailingListForm;
