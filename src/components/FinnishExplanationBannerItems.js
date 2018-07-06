import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Mitä ovat MOOCit?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              MOOCit eli kaikille avoimet verkkokurssit (massive open online
              course) ovat verkko-oppimista parhaimmillaan. Nimensä mukaisesti
              kaikki kurssit ovat avoimia, ilmaisia ja verkkopohjaisia. Sinun ei
              tarvitse huolehtia kurssimaksuista tai koulumatkoista, vaan voit
              opiskella silloin kun sinulle sopii, missä ikinä oletkin.
            </p>
            <p>
              Kurssit ovat erittäin suosittuja. Esimerkiksi Ohjelmoinnin MOOCiin
              on osallistunut kymmeniä tuhansia ohjelmoinnista kiinnostuneita --
              kurssia on käytetty myös yhtenä väylänä tietojenkäsittelytieteen
              opintoihin Helsingin yliopistolle keväästä 2012 lähtien.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Digital Education for All!
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Uusin avaus kaikille avoimessa digitaalisessa opetuksessa on
            syksyllä 2019 alkava Helsingin yliopiston johtama Digital Education
            for All -hanke. Opetus- ja kulttuuriministeriön rahoittamassa
            hankkeessa Helsingin yliopisto, Aalto-yliopisto, Jyväskylän
            yliopisto, Oulun yliopisto ja Turun yliopisto avaa ensimmäisen
            vuoden tietojenkäsittelytieteen opintojaan kaikille.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Opettajalle!</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Opettaja! Saat osan kursseistamme ilmaiseksi käyttöön luokkaasi
            siten, että voit määritellä tehtävien määräajat ymym. Kaikkia
            kursseja saa käyttää osana opetusta. Katso lisää
            Opettajalle-sivulta!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleExpansionPanel);
