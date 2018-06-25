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

const Headline = styled.div`
  padding: 20rem 0;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #1a7f89;
  /* background-image: url({Background}); */
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 60%;
  margin-bottom: 10rem;
`;

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
  padding: 3rem;
  position: absolute;
  top: 150px;
  left: 150px;
`;

class Index extends React.Component {
  render() {
    return (
      <div>
        <Headline>
          {/* <Paper>
            <Tagline variant="headline">
              Laadukkaita, kaikille avoimia kursseja Helsingin yliopistolta.
            </Tagline>
          </Paper> */}
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
        </Headline>
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
