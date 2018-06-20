import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import CourseCard from "../components/CourseCard";

import NoIdeaDogImage from "../images/no-idea-dog.png";
import AiImage from "../images/ai.png";
import CyberImage from "../images/cyber.png";
import FullStackImage from "../images/fullstack.2.png";
import TiraImage from "../images/tira.png";
import TilpeImage from "../images/tilpe.png";
import TilastoImage from "../images/tilasto.png";


const CoursesWrapper = styled.div`
  padding-top: 5rem;
  width: 100%;
  background-color: white;
`;

const CourseGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  margin-bottom: 4rem !important;
`;

export default () => (
  <Fragment>
    <CoursesWrapper>
      <StyledTypography variant="display2">Kurssit</StyledTypography>
      <CourseGrid>
        <CourseCard
          name="Elements of AI"
          description="Vievätkö robotit työmme? Miten tekoäly muuttaa työelämää seuraavan 10 vuoden aikana? Millainen yhteiskunnallinen vaikutus tekoälyllä on?"
          image={AiImage}
          href="https://www.elementsofai.com/"
        />
        <CourseCard
          name="Full stack open 2018"
          description="Syväsukellus moderniin websovelluskehitykseen — ota haltuusi React, Redux, Node.js ja MongoDB! Pääpaino on Reactilla tehdyissä single page -sovelluksissa."
          image={FullStackImage}
          href="https://fullstackopen.github.io/"
        />

        <CourseCard
          name="Ohjelmoinnin MOOC"
          description="Ohjelmointia Javalla perusteista lähtien sekä mahdollisuus opinto-oikeuteen. Täydellinen kurssi ohjelmoinnin alkeiden opetteluun. Ei vaadi esitietoja."
          image={NoIdeaDogImage}
          href="https://materiaalit.github.io/ohjelmointi-18/"
        />
      </CourseGrid>
    </CoursesWrapper>
    <CoursesWrapper>
      <StyledTypography variant="display2">Tulossa</StyledTypography>
      <CourseGrid>
        <CourseCard
          name="Cyber Security Base"
          description="Become a cyber security professional. Cyber Security Base focuses on building core knowledge and abilities related to the work of a cyber security professional."
          image={CyberImage}
          disabled
        />

        <CourseCard
          name="Tietorakenteet ja algoritmit"
          description="Osaat jo ohjelmoida mutta jokin mättää. Opi ratkaisemaan ongelmat yleisimmillä tietorakenteilla ja algoritmeillä. Hyvää jatkoa Ohjelmoinnin MOOCille."
          image={TiraImage}
          disabled
        />
        <CourseCard
          name="Tietoliikenteen perusteet"
          description="Miten internet toimii? Opi miten tietokoneet, puhelimet ja palvelimet keskustelevat verkon yli. Mitä ovat reitittimet ja kytkimet? Opi miten näitä hyödynnetään ohjelmissasi."
          image={TilpeImage}
          disabled
        />

        <CourseCard
          name="Tilastotiede ja R-kieli"
          description="Opi tilasto ja R"
          image={TilastoImage}
          disabled
        />

      </CourseGrid>
    </CoursesWrapper>
  </Fragment>
);
