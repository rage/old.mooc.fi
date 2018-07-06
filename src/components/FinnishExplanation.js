import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import FinnishExplanationBannerItems from "./FinnishExplanationBannerItems";

export default () => (
  <Fragment>
    <Typography variant="display1">
      Laadukkaita, avoimia ja ilmaisia verkkokursseja kaikille
    </Typography>
    <p>
      Helsingin yliopiston tietojenkäsittelytieteen osasto tarjoaa avoimia
      laadukkaita ja ilmaisia verkkokursseja kaikille. Aiheeseen syventyminen ei
      vaadi ennakkotietoja -- aloittelija voi lähteä liikkeelle Ohjelmoinnin
      MOOCista tai tekoälyn perusteisiin keskittyvästä Elements of AI
      -kurssista.
    </p>

    <FinnishExplanationBannerItems />
  </Fragment>
);
