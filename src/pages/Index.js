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

// import Background from "../images/";
import Courses from "../components/Courses";
import { Paper } from "@material-ui/core";
import FinnishExplanation from "../components/FinnishExplanation";
import EnglishExplanation from "../components/EnglishExplanation";

import BannerBackground from "../components/BannerBackground";

// const CalloutButton = styled(Button)`
//   text-transform: uppercase !important;
//   background-color: white !important;
//   position: relative;
//   top: 70px;
//   svg {
//     vertical-align: middle;
//     position: relative;
//     top: -1px;
//   }
// `;

// const Callout = styled.div`
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// const StartLearningCanvas = styled(Paper)`
//   width: 300px !important;
//   height: 70px !important;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
//   position: relative;
//   top: 65px;
// `;

const Explanation = styled(Paper)`
  width: 600px;
  z-index: 50;
  padding: 2rem;
  margin: 10rem;
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
        {/* <Callout>
          <CalloutButton variant="raised">
            <ArrowDropDown /> Aloita oppiminen<ArrowDropDown />
          </CalloutButton>
        </Callout> */}
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
      </div>
    );
  }
}

export default withLayout(Index);
