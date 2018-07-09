import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import FancyExpansionPanel from "./FancyExpansionPanel";

import MoocIcon from "@material-ui/icons/Book";
import DefaIcon from "@material-ui/icons/LocationCity";
import TeacherIcon from "@material-ui/icons/People";

const Explanation = styled.div`
  padding: 0.6rem 0;
`;

export default () => (
  <Fragment>
    <Typography variant="display1">
      Laadukkaita, avoimia ja ilmaisia verkkokursseja kaikille
    </Typography>
    <Explanation>
      <Typography variant="subheading">
        Helsingin yliopiston tietojenkäsittelytieteen osasto tarjoaa avoimia
        laadukkaita ja ilmaisia verkkokursseja kaikille. Aiheeseen syventyminen
        ei vaadi ennakkotietoja -- aloittelija voi lähteä liikkeelle
        Ohjelmoinnin MOOCista tai tekoälyn perusteisiin keskittyvästä Elements
        of AI -kurssista.
      </Typography>
    </Explanation>

    <FancyExpansionPanel
      items={[
        {
          title: "Kaikille avoimia kursseja",
          shortDescription:
            "Verkko-oppimista parhaillaan. Älä huolehdi kurssimaksuista tai koulumatkoista, vaan opiskele missä sinulle sopii.",
          longDescription:
            "MOOCit eli kaikille avoimet verkkokurssit (massive open online course) ovat verkko-oppimista parhaimmillaan. Nimensä mukaisesti kaikki kurssit ovat avoimia, ilmaisia ja verkkopohjaisia. Sinun ei tarvitse huolehtia kurssimaksuista tai koulumatkoista, vaan voit opiskella silloin kun sinulle sopii, missä ikinä oletkin.",
          icon: MoocIcon
        },
        {
          title: "Ensimmäisen vuoden opinnot kaikille",
          shortDescription:
            "Syksyllä 2019 alkava Digital Education for All -hanke tarjoaa uniikin mahdollisuuden opiskella tietojenkäsittelytieteen osaston ensimmäisen vuoden kurssit kotoasi.",
          longDescription:
            "Uusin avaus kaikille avoimessa digitaalisessa opetuksessa on syksyllä 2019 alkava Helsingin yliopiston johtama Digital Education for All -hanke. Opetus- ja kulttuuriministeriön rahoittamassa hankkeessa Helsingin yliopisto, Aalto-yliopisto, Jyväskylän yliopisto, Oulun yliopisto ja Turun yliopisto avaa ensimmäisen vuoden tietojenkäsittelytieteen opintojaan kaikille.",
          icon: DefaIcon
        },
        {
          title: "Opeta kursseja omassa luokassasi",
          shortDescription:
            "Opettaja! Saat kurssit omaan luokkaasi omilla pistelistoillasi ja omalla aikataulullasi.",
          longDescription:
            "Opettaja! Saat osan kursseistamme ilmaiseksi käyttöön luokkaasi siten, että voit määritellä tehtävien määräajat ymym. Kaikkia kursseja saa käyttää osana opetusta. Katso lisää Opettajalle-sivulta!",
          icon: TeacherIcon
        }
      ]}
    />
  </Fragment>
);
