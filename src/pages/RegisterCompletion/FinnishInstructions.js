import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { signOut } from "../../services/moocfi";

const List = styled.ol`
  li {
    margin-bottom: 1.5rem;
  }
`;

export default ({ email, courseDetails }) => (
  <div>
    <p>Tee näin:</p>

    <List>
      <li>
        Huomaa, että sinun täytyy käyttää kohdan 2 reksteröintilomakkeessa
        sähköpostiosoitetta "{email}" (ilman lainausmerkkejä). Jos et käytä tätä
        osoitetta lomakkeessa, suoritustasi ei voida kirjata.
      </li>
      <li>
        Täytä lomake osoitteessa:{" "}
        <a
          href={courseDetails.formUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {courseDetails.formUrl}
        </a>
      </li>
      <li>
        Täytä lomakkeen kohtaan: "Käyttämäsi sähköpostiosoite MOOC-kurssilla"
        sähköpostiosoitteeksi "{email}" ilman lainausmerkkejä.
      </li>
      <li>
        {" "}
        Jos haluat tiedon sähköpostiisi opintopisteidesi kirjautumisesta, muista
        rastittaa "Henkilötietojen käyttö" -laatikon alta kohta
        "Opintosuorituksista lähetetään ilmoitus sähköpostiini (sisältää
        arvosanan)"". Opintopisteet kirjautuvat viimeistään kuuden viikon
        kuluessa ilmoittautumisesta.
      </li>
      <li>
        Opintosuoritus kirjataan kuuden viikon sisään lomakkeen täyttämisestä.
      </li>
    </List>

    <p>
      {" "}
      HUOM! Jos olet Helsingin yliopiston perustutkinto-opiskelija, nämä
      ilmoittatumisohjeet koskevat myös sinua. Vain niiden opiskelijoiden
      suoritukset rekisteröidään, jotka ilmoittautuvat kurssille Avoimen
      yliopiston kautta.
    </p>

    <Button variant="contained" color="primary" onClick={signOut}>
      Kirjaudu ulos
    </Button>
  </div>
);
