import React from "react";
// import Button from "@material-ui/core/Button";
import withLayout from "../layout/withLayout";
import styled from "styled-components";
import LanguageContext, { languages } from "../contexes/LanguageContext";
import {
  finnishCourses,
  englishCourses,
  finnishUpcomingCourses,
  englishUpcomingCourses
} from "../constants/CourseConstants";

import Courses from "../components/Courses";
import { Paper } from "@material-ui/core";
import FinnishExplanation from "../components/FinnishExplanation";
import EnglishExplanation from "../components/EnglishExplanation";

import BannerBackground from "../components/BannerBackground";
import MailingListForm from "../components/MailingListForm";

const Explanation = styled(Paper)`
  max-width: 600px;
  z-index: 50;
  padding: 2rem;
  margin: 5rem 0;
  @media only screen and (min-width: 600px) {
    margin-top: 10rem;
    margin-left: 9rem;
  }
  margin-bottom: 0.1rem;
`;

class Index extends React.Component {
  render() {
    return (
      <div>
        <BannerBackground />
        <Explanation>
          <LanguageContext.Consumer>
            {language =>
              language === languages.finnish ? (
                <FinnishExplanation />
              ) : (
                <EnglishExplanation />
              )
            }
          </LanguageContext.Consumer>
        </Explanation>
        <LanguageContext.Consumer>
          {language => {
            return (
              <Courses
                courses={
                  language === languages.finnish
                    ? finnishCourses
                    : englishCourses
                }
                upcomingCourses={
                  language === languages.finnish
                    ? finnishUpcomingCourses
                    : englishUpcomingCourses
                }
              />
            );
          }}
        </LanguageContext.Consumer>
        <MailingListForm />
      </div>
    );
  }
}

export default withLayout(Index);
