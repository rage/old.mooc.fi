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

import Particles from "react-particles-js";

const Headline = styled.div`
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
          <Particles
            width="97vw"
            height="700px"
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 0,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 4,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 0.3,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: false,
                    mode: "bubble"
                  },
                  onclick: {
                    enable: false,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
          />
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
