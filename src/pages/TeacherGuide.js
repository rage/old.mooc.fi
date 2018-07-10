import React from "react";
import withLayout from "../layout/withLayout";
import Header from "../components/Header";
import { Typography, Button } from "@material-ui/core";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBookOpen, faLaptop, faPlusSquare, faUserFriends, faBook, faComments } from '@fortawesome/free-solid-svg-icons'

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
      <div>
        <ContentBlock>
          <Header variant="display2">MOOC.fi opettajille</Header>
          <TextBlock>
            Ohjelmointitaito korostuu jatkuvasti nykyajan maailmassa ja
            opetuksessa. Avustamme kaikkia kiinnostuneita kouluja järjestämään
            ohjelmoinnin perusopetusta. Tarjoamme käyttöösi kaiken kurssilla
            tarvittavan materiaalin aina koekysymyksiin asti. Sinun ei edes
            tarvitse huolehtia tehtävistä tai tentistä: tehtävät tarkastetaan
            automaattisesti ja valmiit tenttivastaukset voit vain lähettää
            meille tarkastusta varten.
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <StyledIcon icon={faGraduationCap} size="3x" />
          <Header variant="display1">MOOCin käyttö opetuksessa</Header>
          <TextBlock>
            Voit hyödyntää tarjoamiamme materiaaleja vapaasti. Materiaaleissamme
            käytetty Creative Commons BY-NC-SA -lisenssi tarkoittaa sitä, että
            voit käyttää materiaaleja joko sellaisenaan tai muokata niitä
            paremmin omaan opetukseesi sopivaksi, kunhan säilytät tiedon
            alkuperäisistä tekijöistä materiaalissa.
            <br />
            <br />
            Mikäli tarkoituksesi on järjestää ohjelmoinnin perusteiden opetusta,
            kurssikokonaisuutemme sopii siihen erinomaisesti. Tarjolla on
            laadukas opetusmateriaali, joka “opettaa itse itseään”, sekä
            erittäin kattavat harjoitustehtäväsarjat, jotka järjestelmämme
            tarkastaa automaattisesti mihin tahansa kellonaikaan. Jos haluat
            omaan oppilaitokseesi kurssejamme, joilla on omaan opetukseesi
            sopivat määräajat, onnistuu se toistaiseksi maksutta. Olemme
            kehittämässä prosessia jatkuvasti. Oman ohjelmointikurssin pitäminen
            ei ole koskaan ollut näin helppoa!
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
          <Header variant="display1">Näin järjestät kurssin</Header>
          <TextBlock>
            Mikäli opiskelijasi haluavat hakea Ohjelmoinnin MOOC -kurssin kautta
            opiskelupaikkaa Helsingin yliopiston tietojenkäsittelyn laitokselle,
            tulee heidän osallistua juuri kyseenomaiselle opiskeluoikeiden
            mahdollistavalle kurssille. Muissa tapauksissa suosittelemme oman
            kurssi-instanssin luomista, jolloin opettajana sinun on helpompaa ja
            vaivattomampaa seurata kurssilaistesi etenemistä, sekä voit asettaa
            kurssille omat määräajat. Mikäli haluaisit kurssillesi kokeen, ota
            meihin sähköpostitse yhteyttä mieluusti ennen kuin aloitatte
            kurssin.
            <br />
            <br />
            Tarjoamme kursseistamme valmiita kurssipaketteja, joista voit luoda
            omaan käyttöösi, sinulle sopivilla määräajoilla, oman kurssin.
            Kurssipakettiin kuuluu siis tehtävät ja erityisesti näille
            tehtäville tarkoitettu opetusmateriaali. Kurssin materiaali on
            avoimesti kaikkien luettavissa netissä, mutta kurssin tehtäviä
            tehdäkseen tulee opiskelijan kirjautua järjestelmään ja
            rekisteröityä kurssillesi.
            <br />
            <br />
            Opettajana näet tehtävät malliratkaisuineen, sekä kaikkien
            kurssilaisten kaikki palautukset ja pisteet. Voit myös hallita
            kurssien tehtävien avautumista ja sulkeutumista omien tarpeidesi
            mukaan.
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <StyledIcon icon={faLaptop} size="3x" />
          <Header variant="display1">Test My Code (TMC)</Header>
          <TextBlock>
            Test My Code (TMC) on järjestelmä, joka huolehtii tehtävien
            automaattisesta tarkastuksesta ja pisteytyksestä. Opettajille se
            mahdollistaa omalle koululleen oman organisaation ja kurssien
            luomisen. Organisaatio ja omat kurssit on tarkoitettu helpottamaan
            omien opiskelijoiden seurantaa ja yksilöllistä tehtävien
            aikatauluttamista.'
            <br />
            <br />
            Luotuasi organisaation, voit antaa myös muille koulusi opettajille
            oikeudet hallinnoida organisaatiota. Voit myös kurssikohtaisesti
            antaa apuopettajan statuksen.
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <StyledIcon icon={faPlusSquare} size="3x" />
          <Header variant="display1">Kurssin perustaminen</Header>
          <TextBlock>
            Aloita luomalla itsellesi käyttäjätunnus sivustolle
            https://tmc.mooc.fi/. Huomaa, että vaikka olisit aiemmin tehnyt
            mooc.fi -sivuston kursseja, ei osoitteessa https://tmc.mooc.fi/mooc
            tehty käyttäjätunnus toimi tässä toisessa palvelussa ainakaan
            toistaiseksi. Voit halutessasi käyttää käyttäjätunnusta luodessasi
            samaa nimimerkkiä ja sähköpostia kuin mooc.fi:n TMC-palvelussa.
            <br />
            <br />
            Varmista ettei oppilaitoksellesi ole jo luotu organisaatiota. Mikäli
            oppilaitoksellasi on jo organisaatio, pyydä jotakuta organisaation
            opettajaa lisäämään sinut opettajaksi. Pyrimme välttämään tilannetta
            jossa esimerkiksi samalla lukiolla on järjestelmässä useita eri
            organisaatioita.
            <br />
            <br />
            Seuraa Test My Coden opettajan opasta koulusi organisaation
            luomiseen ja ensimmäisen kurssin rakentamiseen. Huom: opas on tällä
            hetkellä tarjolla vain englanniksi.
          </TextBlock>
          <StyledButton
            variant="contained"
            color="primary"
            href="http://testmycode-usermanual.github.io/usermanual/teachers.html"
          >
            TMC opas opettajille
          </StyledButton>
          <TextBlock>
            <b>Huom:</b> organisaatio luodaan järjestelmään välittämästi, joten
            voit heti organisaation luomisen jälkeen lisätä sen alle kursseja.
            Et kuitenkaan näe tehtävien mallivastauksia ennen kuin
            järjestelmänvalvoja varmistaa organisaatiosi. Järjestelyn tarkoitus
            on estää organisaatioiden luominen mallivastausten lunttaamiseksi.
            Organisaatiot hyväksytään yleensä seuraavana arkipäivänä mikäli olet
            käyttänyt instituutiosi sähköpostiosoitetta. Mikäli hyväksyminen
            kestää, ota yhteyttä sähköpostiosoitteeseemme, jonka löydät mm.
            tämän sivun alareunasta.
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <StyledIcon icon={faUserFriends} size="3x" />
          <Header variant="display1">Vinkkejä lähiopetukseen</Header>
          <TextBlock>
            Ohjelmointia oppii parhaiten tekemällä, ja siksi tärkeintä onkin
            että opiskelijat pääsevät itse ohjelmoimaan mahdollisimman paljon.
            Olemme huomanneet että opiskelijat oppivat klassista luentoa
            paremmin ns. "pajaopetuksessa", missä kurssin asiat jo hallitsevat
            henkilöt kiertelevät ATK-luokassa tarjoten apua opiskelijoille jotka
            tekevät muuten itsenäisesti tehtäviä. Tekniikasta käytetään myös
            nimeä "tehostettu kisällioppiminen" ja siitä on julkaistu useita
            artikkeleita.
            <br />
            <br />
            Myös luento-tyyppinen opetus on toki hyödyllistä. Luennolla ei
            kuitenkaan kannattane tehdä suoraan samoja tehtäviä kuin mitä
            opiskelijat tekevät viikon aikana, vaan näyttää lyhyitä esimerkkejä
            viikon konsepteista. Olemme huomanneet että luennollakin on usein
            hyödyllistä käyttää suurin osa ajasta näyttäen opettajan
            ohjelmointia esim. videotykin kautta.
            <br />
            <br />
            Tärkeää on myös huomata että on jopa hyödyllistä jos opiskelija
            näkee opettajan tekevän ohjelmointivirheitä. Opiskelija näkee että
            virheet ovat arkea, ja ettei kukaan luo heti täydellistä koodia.
            Lisäksi opiskelija oppii samalla kuinka virheitä tunnistetaan ja
            korjataan.
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <StyledIcon icon={faBook} size="3x" />
          <Header variant="display1">Opetussuunnitelma 2016</Header>
          <TextBlock>
            Lähivuosina kaikki opettelevat ohjelmointia peruskoulusta asti. Tämä
            vaatii opettajilta ohjelmointiosaamista.
            <br />
            <br />
            Suosittelemme opettajille opetuksen tueksi erityisesti Koodiaapista.
            Koodiaapinen kerää ja tarjoaa opettajille suunnattuja resursseja,
            jotka auttavat ohjelmointiopetuksen järjestämisessä. Voit osallistua
            koodiaapisen luomiseen myös itse.
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <StyledIcon icon={faComments} size="3x" />
          <Header variant="display1">Ota yhteyttä</Header>
          <TextBlock>
            Saat meihin parhaiten yhteyden lähettämällä sähköpostia osoitteeseen
            mooc@cs.helsinki.fi.
          </TextBlock>
        </ContentBlock>
      </div>
    );
  }
}

export default withLayout(TeacherGuide);
