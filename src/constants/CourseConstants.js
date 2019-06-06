import AiImage from "../images/ai.png";
import ContainerImage from "../images/containers.png"
import FullStackImage from "../images/fullstack.2.png";
import NoIdeaDogImage from "../images/no-idea-dog.png";
import NoIdeaDogImageRotated from "../images/no-idea-dog-rotated.png";
import GuideDogImage from "../images/doggos.png";
import CyberImage from "../images/cyber.png";
import TiraImage from "../images/tira.png";
import TilpeImage from "../images/tilpe.png";
import TikapeImage from "../images/tikape.jpg";
import TitoImage from "../images/tietokoneen-toiminnan-perusteet.jpg";
import WepaImage from "../images/wepa.jpg";

export const englishCourses = {
  ongoingCourses: [
    {
      name: "Full stack open 2019",
      description:
        "Deep dive into modern web development — learn to master React, Redux, Node.js, GraphQL and MongoDB!",
      image: FullStackImage,
      href: "https://fullstackopen.com/en/"
    },
    {
      name: "Elements of AI",
      description:
        "Will robots take our jobs? How will artificial intelligence change our working life in the next 10 years? How will intelligence impact our society?",
      image: AiImage,
      href: "https://www.elementsofai.com/",
    },
    {
      name: "2013 Programming with Java I",
      description:
        "Learn the basics of computer programming, algorithms and object-oriented programming using the Java programming language.",
      image: NoIdeaDogImageRotated,
      href: "http://moocfi.github.io/courses/2013/programming-part-1/",
    },
    {
      name: "2013 Programming with Java II",
      description:
        "This course is a direct continuation of the course Object-Oriented Programming with Java, part I.",
      image: GuideDogImage,
      href: "http://moocfi.github.io/courses/2013/programming-part-2/",
    },
    {
      name: "DevOps with Docker",
      description: "Learn the basics of modern software deployment in this introductory course to Docker and docker-compose. Explore different parts of web services, such as reverse proxies, databases etc.",
      image: ContainerImage,
      href: "https://docker-hy.github.io/"
    },
  ],
  upcomingCourses: [
    {
      name: "Cyber Security Base",
      description:
        "Become a cyber security professional. Cyber Security Base focuses on building core knowledge and abilities related to the work of a cyber security professional. Starts on October 28th.",
      image: CyberImage,
    },
  ],
  pastCourses: [
    {
      name: "Cyber Security Base (2018)",
      description:
        "Become a cyber security professional. Cyber Security Base focuses on building core knowledge and abilities related to the work of a cyber security professional.",
      image: CyberImage,
      href: "https://cybersecuritybase.mooc.fi/",
    },
  ],
};

export const finnishCourses = {
  ongoingCourses: [
    {
      name: "Ohjelmoinnin MOOC 2019",
      description:
        "Ohjelmointia Javalla perusteista lähtien sekä mahdollisuus opinto-oikeuteen. Täydellinen kurssi ohjelmoinnin alkeiden opetteluun. Ei vaadi esitietoja.",
      image: NoIdeaDogImageRotated,
      href: "https://ohjelmointi-19.mooc.fi/",
    },
    {
      name: "Full stack open 2019",
      description:
        "Syväsukellus moderniin websovelluskehitykseen — ota haltuusi React, Redux, Node.js, GraphQL ja MongoDB! Kurssi alkaa 15.3. ja päättyy 15.12.",
      image: FullStackImage,
      href: "https://fullstackopen.com/",
    },
    {
      name: "Elements of AI",
      description:
        "Vievätkö robotit työmme? Miten tekoäly muuttaa työelämää seuraavan 10 vuoden aikana? Millainen yhteiskunnallinen vaikutus tekoälyllä on?",
      image: AiImage,
      href: "https://www.elementsofai.com/fi",
    },
    {
      name: "Web-palvelinohjelmointi Java",
      description:
        "Java-kielisten web-sovellusten toteutus tutuksi. Opi mm. Spring sovelluskehyksen periaatteet.Kurssi on käynnissä. Ensimmäisen osan tehtävien deadline on 18.3. Kurssi päättyy 10.5.",
      image: WepaImage,
      href: "https://web-palvelinohjelmointi-19.mooc.fi/"
    },
    {
      name: "Johdatus tietoliikenteeseen",
      description:
        "Miten internet toimii? Opi miten tietokoneet, puhelimet ja palvelimet keskustelevat verkon yli. Mitä ovat reitittimet ja kytkimet?",
      image: TilpeImage,
      href: "https://johdatus-tietoliikenteeseen-19.mooc.fi/",
    },
    {
      name: "DevOps with Docker",
      description: "Miten sovellusten käyttöönotto tapahtuu nykyään? Tällä kurssilla tutustutaan Dockeriin ja docker-composeen. Samalla opit monista erilaisista osista joista webpalvelut koostuvat.",
      image: ContainerImage,
      href: "https://docker-hy.github.io/"
    },
    {
      name: "Tietokantojen perusteet",
      description:
        "Miten tietokannat toimivat? Opi SQL-kielen perusteet, relaatietokantojen suunnittelun ja käytön, sekä tietokantaa käyttävien ohjelmistojen perusteet. Ilmoittautuminen on jo käynnissä, itse kurssi alkaa 9.5.",
      image: TikapeImage,
      disabled: false,
      href: "https://tietokantojen-perusteet-19.mooc.fi/",
    },
  ],
  upcomingCourses: [
    {
      name: "Tietorakenteet ja algoritmit",
      description:
        "Osaat jo ohjelmoida mutta haluat kehittyä lisää. Opi suunnittelemaan tehokkaita algoritmeja, joilla voit ratkaista kinkkisiä ongelmia salamannopeasti. Kurssi alkaa näillä näkymin syksyllä 2019.",
      image: TiraImage,
    },
    {
      name: "Tietokoneen toiminnan perusteet",
      description:
        "Mitä tietokoneet ovat ja miten ne toimivat? Opi alkeet millaisista osista ja toiminnallisuuksista nämä meille elintärkeät laitteet koostuvat.",
      image: TitoImage,
    },
    {
      name: "Cyber Security Base",
      description:
        "Become a cyber security professional. Cyber Security Base focuses on building core knowledge and abilities related to the work of a cyber security professional. Starts on October 28th.",
      image: CyberImage,
    },
  ],
  pastCourses: [
    {
      name: "Ohjelmoinnin MOOC 2018",
      description:
        "Ohjelmointia Javalla perusteista lähtien sekä mahdollisuus opinto-oikeuteen. Täydellinen kurssi ohjelmoinnin alkeiden opetteluun. Ei vaadi esitietoja.",
      image: NoIdeaDogImage,
      href: "http://moocfi.github.io/courses/2018/ohjelmoinnin-mooc/",
    },
    {
      name: "Cyber Security Base (2018)",
      description:
        "Become a cyber security professional. Cyber Security Base focuses on building core knowledge and abilities related to the work of a cyber security professional.",
      image: CyberImage,
      href: "https://cybersecuritybase.mooc.fi/",
    },
  ],
};
