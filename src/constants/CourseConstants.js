import AiImage from "../images/ai.png";
import FullStackImage from "../images/fullstack.2.png";
import NoIdeaDogImage from "../images/no-idea-dog.png";
import CyberImage from "../images/cyber.png";
import TiraImage from "../images/tira.png";
import TilpeImage from "../images/tilpe.png";

export const englishCourses = [
  {
    name: "Elements of AI",
    description:
      "Will robots take our jobs? How will artificial intelligence change our working life in the next 10 years? How will intelligence impact our society?",
    image: AiImage,
    href: "https://www.elementsofai.com/"
  },
  {
    name: "2013 Programming with Java I",
    description:
      "Learn the basics of computer programming, algorithms and object-oriented programming using the Java programming language.  Tested using our automatic testing service.",
    image: NoIdeaDogImage,
    href: "https://materiaalit.github.io/2013-oo-programming/part1/week-1/"
  },
  {
    name: "2013 Programming with Java II",
    description:
      "This course is a direct continuation of the course Object-Oriented Programming with Java, part I. In Part II, we will dwell deeper into the world of object-oriented programming.",
    image: NoIdeaDogImage,
    href: "https://materiaalit.github.io/2013-oo-programming/part2/week-7/"
  }
];

export const englishUpcomingCourses = [
  {
    name: "Cyber Security Base",
    description:
      "Become a cyber security professional. Cyber Security Base focuses on building core knowledge and abilities related to the work of a cyber security professional.",
    image: CyberImage
  }
];

export const finnishCourses = [
  {
    name: "Elements of AI",
    description:
      "Vievätkö robotit työmme? Miten tekoäly muuttaa työelämää seuraavan 10 vuoden aikana? Millainen yhteiskunnallinen vaikutus tekoälyllä on?",
    image: AiImage,
    href: "https://www.elementsofai.com/"
  },
  {
    name: "Full stack open 2018",
    description:
      "Syväsukellus moderniin websovelluskehitykseen — ota haltuusi React, Redux, Node.js ja MongoDB! Pääpaino on Reactilla tehdyissä single page -sovelluksissa.",
    image: FullStackImage,
    href: "https://fullstackopen.github.io/"
  },
  {
    name: "Ohjelmoinnin MOOC",
    description:
      "Ohjelmointia Javalla perusteista lähtien sekä mahdollisuus opinto-oikeuteen. Täydellinen kurssi ohjelmoinnin alkeiden opetteluun. Ei vaadi esitietoja.",
    image: NoIdeaDogImage,
    href: "https://materiaalit.github.io/ohjelmointi-18/"
  }
];

export const finnishUpcomingCourses = [
  {
    name: "Cyber Security Base",
    description:
      "Become a cyber security professional. Cyber Security Base focuses on building core knowledge and abilities related to the work of a cyber security professional.",
    image: CyberImage
  },
  {
    name: "Tietorakenteet ja algoritmit",
    description:
      "Osaat jo ohjelmoida mutta jokin mättää. Opi ratkaisemaan ongelmat yleisimmillä tietorakenteilla ja algoritmeillä. Hyvää jatkoa Ohjelmoinnin MOOCille.",
    image: TiraImage
  },
  {
    name: "Tietoliikenteen perusteet",
    description:
      "Miten internet toimii? Opi miten tietokoneet, puhelimet ja palvelimet keskustelevat verkon yli. Mitä ovat reitittimet ja kytkimet? Opi miten näitä hyödynnetään ohjelmissasi.",
    image: TilpeImage
  }
];
