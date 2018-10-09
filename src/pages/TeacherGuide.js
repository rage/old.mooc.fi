import React from "react";
import withLayout from "../layout/withLayout";
import Header from "../components/Header";
import { Typography, Button } from "@material-ui/core";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBookOpen,
  faLaptop,
  faPlusSquare,
  faUserFriends,
  faBook,
  faComments
} from "@fortawesome/free-solid-svg-icons";
import LanguageContext, { languages } from "../contexes/LanguageContext";

const TextBlock = styled(Typography)`
  max-width: 800px;
`;

const ContentBlock = styled.div`
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  :nth-child(even) {
    background-color: #f6f9fc;
  }
`;

const StyledButton = styled(Button)`
  margin: 2rem !important;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 1rem;
`;

class TeacherGuide extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {language =>
          language === languages.finnish ? (
            <div>
              <ContentBlock>
                <Header variant="h3">MOOC.fi opettajille</Header>
                <TextBlock>
                  Ohjelmointitaito korostuu jatkuvasti nykyajan maailmassa ja
                  opetuksessa. Avustamme kaikkia kiinnostuneita kouluja
                  järjestämään ohjelmoinnin perusopetusta. Tarjoamme käyttöösi
                  kaiken kurssilla tarvittavan materiaalin aina koekysymyksiin
                  asti. Sinun ei edes tarvitse huolehtia tehtävistä tai
                  tentistä: tehtävät tarkastetaan automaattisesti ja Helsingin
                  yliopisto tarjoaa halutessasi kokeet ilmaisina
                  verkkotentteinä.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faGraduationCap} size="3x" />
                <Header variant="h4">MOOCin käyttö opetuksessa</Header>
                <TextBlock>
                  Voit hyödyntää suurinta osaa tarjoamistamme materiaaleista
                  vapaasti. Materiaaleissamme on lähes poikkeuksetta käytetty{" "}
                  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fi">
                    Creative Commons BY-NC-SA
                  </a>{" "}
                  -lisenssiä, mutta tarkista vielä lisenssi materiaalista.
                  Creative Commons BY-NC-SA -lisenssi tarkoittaa sitä, että voit
                  käyttää materiaaleja joko sellaisenaan tai muokata niitä
                  paremmin omaan opetukseesi sopivaksi, kunhan säilytät tiedon
                  alkuperäisistä tekijöistä materiaalissa ja et tavoittele
                  materiaaleillamme itsellesi kaupallista hyötyä.
                  <br />
                  <br />
                  Mikäli tarkoituksesi on järjestää ohjelmoinnin perusteiden
                  opetusta, kurssikokonaisuutemme sopii siihen erinomaisesti.
                  Tarjolla on laadukas opetusmateriaali, joka "opettaa itse
                  itseään", sekä erittäin kattavat harjoitustehtäväsarjat, jotka
                  järjestelmämme tarkastaa automaattisesti mihin tahansa
                  kellonaikaan. Jos haluat omaan oppilaitokseesi kurssejamme,
                  joilla on omaan opetukseesi sopivat määräajat, onnistuu se
                  toistaiseksi maksutta. Olemme kehittämässä prosessia
                  jatkuvasti. Oman ohjelmointikurssin pitäminen ei ole koskaan
                  ollut näin helppoa!
                  <br />
                  <br />
                  MOOCit ovat muutenkin erittäin kätevä apuväline opettajille.
                  Kaikkiin kursseihin kuuluva automaattinen tehtävien tarkastus
                  vapauttaa aikaa opettajalta opettamiseen ja opiskelijoiden
                  henkilökohtaiseen ohjaamiseen.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faBookOpen} size="3x" />
                <Header variant="h4">Näin järjestät kurssin</Header>
                <TextBlock>
                  Mikäli opiskelijasi haluavat hakea Ohjelmoinnin MOOC -kurssin
                  kautta opiskelupaikkaa Helsingin yliopiston tietojenkäsittelyn
                  laitokselle, tulee heidän osallistua juuri kyseenomaiselle
                  keväisin järjestettävälle aikataulutetulle opiskeluoikeiden
                  mahdollistavalle kurssille. Muissa tapauksissa suosittelemme
                  oman kurssi-instanssin luomista, jolloin opettajana sinun on
                  helpompaa ja vaivattomampaa seurata kurssilaistesi etenemistä,
                  sekä voit asettaa kurssille omat määräajat.
                  <br />
                  <br />
                  Tarjoamme kursseistamme valmiita kurssipaketteja, joista voit
                  luoda omaan käyttöösi, sinulle sopivilla määräajoilla, oman
                  kurssin. Kurssipakettiin kuuluu siis tehtävät ja erityisesti
                  näille tehtäville tarkoitettu opetusmateriaali. Kurssin
                  materiaali on avoimesti kaikkien luettavissa netissä, mutta
                  kurssin tehtäviä tehdäkseen tulee opiskelijan kirjautua
                  järjestelmään ja rekisteröityä kurssillesi.
                  <br />
                  <br />
                  Opettajana näet tehtävät malliratkaisuineen, sekä kaikkien
                  kurssilaisten kaikki palautukset ja pisteet. Voit myös hallita
                  kurssien tehtävien avautumista ja sulkeutumista omien
                  tarpeidesi mukaan.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faLaptop} size="3x" />
                <Header variant="h4">Test My Code (TMC)</Header>
                <TextBlock>
                  Test My Code (TMC) on järjestelmä, joka huolehtii tehtävien
                  automaattisesta tarkastuksesta ja pisteytyksestä. Opettajille
                  se mahdollistaa omalle koululleen oman organisaation ja
                  kurssien luomisen. Organisaatio ja omat kurssit on tarkoitettu
                  helpottamaan omien opiskelijoiden seurantaa ja yksilöllistä
                  tehtävien aikatauluttamista.
                  <br />
                  <br />
                  Luotuasi organisaation, voit antaa myös muille koulusi
                  opettajille oikeudet hallinnoida organisaatiota. Voit myös
                  kurssikohtaisesti antaa apuopettajan statuksen.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faPlusSquare} size="3x" />
                <Header variant="h4">Kurssin perustaminen</Header>
                <TextBlock>
                  Aloita luomalla itsellesi käyttäjätunnus sivustolle{" "}
                  <a href="https://tmc.mooc.fi/">https://tmc.mooc.fi/</a>.
                  <br />
                  <br />
                  Varmista ettei oppilaitoksellesi ole jo luotu organisaatiota.
                  Mikäli oppilaitoksellasi on jo organisaatio, pyydä jotakuta
                  organisaation opettajaa lisäämään sinut opettajaksi. Pyrimme
                  välttämään tilannetta jossa esimerkiksi samalla lukiolla on
                  järjestelmässä useita eri organisaatioita.
                  <br />
                  <br />
                  Seuraa Test My Coden opettajan opasta koulusi organisaation
                  luomiseen ja ensimmäisen kurssin rakentamiseen. Huom: opas on
                  tällä hetkellä tarjolla vain englanniksi.
                </TextBlock>
                <StyledButton
                  variant="contained"
                  color="primary"
                  href="http://testmycode-usermanual.github.io/usermanual/teachers.html"
                >
                  TMC opas opettajille
                </StyledButton>
                <TextBlock>
                  <b>Huom:</b> organisaatio luodaan järjestelmään välittämästi,
                  joten voit heti organisaation luomisen jälkeen lisätä sen alle
                  kursseja. Et kuitenkaan näe tehtävien mallivastauksia ennen
                  kuin järjestelmänvalvoja varmistaa organisaatiosi. Järjestelyn
                  tarkoitus on estää organisaatioiden luominen mallivastausten
                  lunttaamiseksi. Organisaatiot hyväksytään yleensä seuraavana
                  arkipäivänä mikäli olet käyttänyt instituutiosi
                  sähköpostiosoitetta. Mikäli hyväksyminen kestää, ota yhteyttä
                  sähköpostiosoitteeseemme, jonka löydät mm. tämän sivun
                  alareunasta.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faUserFriends} size="3x" />
                <Header variant="h4">Vinkkejä lähiopetukseen</Header>
                <TextBlock>
                  Ohjelmointia oppii parhaiten tekemällä, ja siksi tärkeintä
                  onkin että opiskelijat pääsevät itse ohjelmoimaan
                  mahdollisimman paljon. Olemme huomanneet että opiskelijat
                  oppivat klassista luentoa paremmin ns. "pajaopetuksessa",
                  missä kurssin asiat jo hallitsevat henkilöt kiertelevät
                  ATK-luokassa tarjoten apua opiskelijoille jotka tekevät muuten
                  itsenäisesti tehtäviä. Tekniikasta käytetään myös nimeä
                  "tehostettu kisällioppiminen" ja siitä on julkaistu useita
                  artikkeleita.
                  <br />
                  <br />
                  Myös luento-tyyppinen opetus on toki hyödyllistä. Luennolla ei
                  kuitenkaan kannattane tehdä suoraan samoja tehtäviä kuin mitä
                  opiskelijat tekevät viikon aikana, vaan näyttää lyhyitä
                  esimerkkejä viikon konsepteista. Olemme huomanneet että
                  luennollakin on usein hyödyllistä käyttää suurin osa ajasta
                  näyttäen opettajan ohjelmointia esim. videotykin kautta.
                  <br />
                  <br />
                  Tärkeää on myös huomata että on jopa hyödyllistä jos
                  opiskelija näkee opettajan tekevän ohjelmointivirheitä.
                  Opiskelija näkee että virheet ovat arkea, ja ettei kukaan luo
                  heti täydellistä koodia. Lisäksi opiskelija oppii samalla
                  kuinka virheitä tunnistetaan ja korjataan.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faBook} size="3x" />
                <Header variant="h4">Opetussuunnitelma 2016</Header>
                <TextBlock>
                  Lähivuosina kaikki opettelevat ohjelmointia peruskoulusta
                  asti. Tämä vaatii opettajilta ohjelmointiosaamista.
                  <br />
                  <br />
                  Suosittelemme opettajille opetuksen tueksi erityisesti{" "}
                  <a href="http://koodiaapinen.fi/">Koodiaapista</a>.
                  Koodiaapinen kerää ja tarjoaa opettajille suunnattuja
                  resursseja, jotka auttavat ohjelmointiopetuksen
                  järjestämisessä. Voit osallistua koodiaapisen luomiseen myös
                  itse.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faComments} size="3x" />
                <Header variant="h4">Ota yhteyttä</Header>
                <TextBlock>
                  Saat meihin parhaiten yhteyden lähettämällä sähköpostia
                  osoitteeseen{" "}
                  <a href="mailto:mooc@cs.helsinki.fi">mooc@cs.helsinki.fi</a>.
                </TextBlock>
              </ContentBlock>{" "}
            </div>
          ) : (
            <div>
              <ContentBlock>
                <StyledIcon icon={faGraduationCap} size="3x" />
                <Header variant="h3">MOOC.fi for teachers</Header>
                <TextBlock>
                  You can utilize most of our materials freely. Most of them are
                  licenced with{" "}
                  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">
                    Creative Commons BY-NC-SA
                  </a>{" "}
                  -licence, but check the course materials for confirmation.
                  Creative Commons BY-NC-SA -licence means that you can use the
                  materials either as is or modify them to better suit your
                  teaching purposes as long as you preserve the information of
                  the original creators in the materials, and the usage is
                  non-commercial.
                  <br />
                  <br />
                  If you are planning on teaching the basics of programming, our
                  courses are well suited for it. We offer a high quality
                  learing material and very thorough assignment sets which our
                  system can automatically review around the clock! You can host
                  our courses in your learning institution with your own
                  deadlines, free of charge for now. We develop the process
                  continuously. Hosting your own programming course has never
                  been this easy!
                  <br />
                  <br />
                  MOOCs are a great tool for teachers. Our automatic assessment
                  system enables the teacher to focus on the actual teaching and
                  personal guidance of students.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faBookOpen} size="3x" />
                <Header variant="h4">How to host your own course</Header>
                <TextBlock>
                  You can create your own course instance to our automatic
                  assessment system Test My Code (TMC). We offer ready-to-use
                  course packages, which you can use as a template to create
                  your own course instance with your own deadlines to suit your
                  schedule. TMC automatically assesses your students'
                  submissions and provides them feedback instantly. It also
                  provides you with a point list to make it easier for you to
                  follow your students' progress.
                  <br />
                  <br />
                  The course package includes full course materials and exercise
                  sets tailored for the materials. The course materials are
                  openly readable for everyone online, but the exercises require
                  that your students register to mooc.fi.
                  <br />
                  <br />
                  As a teacher you can see the exercises with model solutions,
                  and see all of your students' exercise submissions and points.
                  You can also control when the exercises become available and
                  unavailable to fit your course schedule.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faLaptop} size="3x" />
                <Header variant="h4">Test My Code (TMC)</Header>
                <TextBlock>
                  Test My Code is an automatic assessment system, that handles
                  the automatic assessment and feedback for the course
                  exercises. For teachers, it offers the possibility to create
                  an organization for their learning institution and to create
                  courses for the organization. This way it is easier to follow
                  your students' progress and manage your course schedules.
                  <br />
                  <br />
                  After creating an organization for your learning institution,
                  you can give other teachers permissions to create and manage
                  courses and the organization. You can also grant permissions
                  for course assistants per course.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faPlusSquare} size="3x" />
                <Header variant="h4">Creating your own course</Header>
                <TextBlock>
                  Begin by registering to the website{" "}
                  <a href="https://tmc.mooc.fi/">https://tmc.mooc.fi/</a>.
                  <br />
                  <br />
                  Please make sure that your learning institution doesn't
                  already have an organization. If it does, ask a teacher from
                  your organization to add you as a teacher. We try to avoid
                  situations where schools have multiple organizations in the
                  system.
                  <br />
                  <br />
                  Follow our system's teacher manual on how to create an
                  organization and your first course.
                </TextBlock>
                <StyledButton
                  variant="contained"
                  color="primary"
                  href="http://testmycode-usermanual.github.io/usermanual/teachers.html"
                >
                  Teacher manual
                </StyledButton>
                <TextBlock>
                  <b>Note:</b> the organization will be created instantly, so
                  you can create your courses straight after creating the
                  organization. However, you won't see the model solutions for
                  exercises until we have verified your organization. This
                  arrangement is meant to stop cheating in the exercises by
                  creating organizations to see model solutions. The
                  organizations are usually verified during the next business
                  day if you registered to TMC with your institution's email
                  address. If the verification seems to take a while, please
                  contact us via email.
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <StyledIcon icon={faComments} size="3x" />
                <Header variant="h4">Keep in touch</Header>
                <TextBlock>
                  You can best reach us by email at{" "}
                  <a href="mailto:mooc@cs.helsinki.fi">mooc@cs.helsinki.fi</a>.
                </TextBlock>
              </ContentBlock>{" "}
            </div>
          )
        }
      </LanguageContext.Consumer>
    );
  }
}

export default withLayout(TeacherGuide);
