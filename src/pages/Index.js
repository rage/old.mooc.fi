import React from "react";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
            <Typography variant="display1">
              Digitaalista opetusta kaikille
            </Typography>
            <p>
              Tietojenkäsittelytieteessä käynnistyy pian pilottihanke, jossa
              opiskelupaikan voi saada vuoden aktiivisen opiskelun jälkeen.
              DEFA-hanke (Digital Education For All) sai opetus- ja
              kulttuuriministeriöltä 1,5 miljoonan rahoituksen, ja siinä on
              mukana viisi suomalaista yliopistoa.
            </p>
            <p>
              Ensimmäiset opiskelijat pääsevät kokeilemaan uutta mahdollisuutta
              jo tulevana lukuvuotena, mutta toiminta käynnistyy täysimääräisenä
              syksyllä 2019. Hanke jatkuu vuoden 2020 loppuun, jonka jälkeen
              tehdään päätös jatkosta. Tietojenkäsittelytieteeseen voi tänä
              aikana hakea myös perinteisin tavoin eli pääsykokeen kautta,
              ylioppilastodistuksen perusteella tai avoimen yliopiston väylän
              kautta.
            </p>
            <p>
              Opetus- ja kulttuuriministeriö myönsi avustuksen avoimien
              tietojenkäsittelytieteen opetuksen kehittämiseen ja joustavien
              opintopolkujen kehittämiseen eri tarpeisiin. Avoimia
              tietojenkäsittelytieteen opintoja ei olekaan tarkoitettu
              pelkästään nuorille, vaan niille voi osallistua kuka tahansa
              maksutta.
            </p>
            <p>
              – Eri alojen asiantuntijat voivat räätälöidä omaa osaamistaan
              täydentävän paketin Helsingin yliopiston sekä
              yhteistyöyliopistojen tarjonnasta, kertoo Lemström.
            </p>
            <p>
              Opetus- ja kulttuuriministeriö myönsi keväällä korkeakouluille
              lähes 11 miljoonan euron avustukset, joiden tarkoituksena on
              sujuvoittaa korkeakouluopiskelijoiden opintopolkuja sekä kehittää
              opintojen sisältöjä.
            </p>
          </Explanation>
        </Headline>
        {/* <Callout>
          <CalloutButton variant="raised">
            <ArrowDropDown /> Aloita oppiminen<ArrowDropDown />
          </CalloutButton>
        </Callout> */}
        <LanguageContext.Consumer>
          {language => {
            return(
            <Courses
              courses={
                language === languages.finnish ? finnishCourses : englishCourses
              }
              upcomingCourses={
                language === languages.finnish
                  ? finnishUpcomingCourses
                  : englishUpcomingCourses
              }
            />
            )}}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default withLayout(Index);
