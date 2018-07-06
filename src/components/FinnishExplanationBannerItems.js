import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { injectGlobal } from "styled-components";
import MoocIcon from "@material-ui/icons/Book";
import DefaIcon from "@material-ui/icons/LocationCity";
import TeacherIcon from "@material-ui/icons/People";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

const StyledMoocIcon = styled(MoocIcon)`
  margin-right: 0.3rem;
  color: ${grey[700]};
`;

const StyledDefaIcon = styled(DefaIcon)`
  margin-right: 0.3rem;
  color: ${grey[700]};
`;

const StyledTeacherIcon = styled(TeacherIcon)`
  margin-right: 0.3rem;
  color: ${grey[700]};
`;

const StyledExpansionPanel = styled(ExpansionPanel)`
  div {
    box-shadow: none !important;
  }
  box-shadow: none !important;
  margin: 1rem 0;
`;

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  padding: 0 48.8px !important;
  flex-direction: column;
  button,
  a {
    margin: 1rem 0;
  }
`;

const StyledTagline = styled(Typography)`
  padding: 0 28.8px !important;
`;

const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)`
  & > div {
    display: initial !important;
  }
`;

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: "1.3rem",
    fontWeight: theme.typography.fontWeightRegular,
    color: grey[800]
  }
});

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

injectGlobal`
  .MuiPaper-elevation1-13 {
    //box-shadow: none !important;
  }
`;

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <StyledExpansionPanel>
        <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <TitleWrapper>
            <StyledMoocIcon />
            <Typography className={classes.heading}>
              Kaikille avoimia kursseja
            </Typography>
          </TitleWrapper>

          <StyledTagline>
            Verkko-oppimista parhaillaan. Älä huolehdi kurssimaksuista tai
            koulumatkoista, vaan opiskele missä sinulle sopii.
          </StyledTagline>
        </StyledExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <Typography>
            <Typography>
              MOOCit eli kaikille avoimet verkkokurssit (massive open online
              course) ovat verkko-oppimista parhaimmillaan. Nimensä mukaisesti
              kaikki kurssit ovat avoimia, ilmaisia ja verkkopohjaisia. Sinun ei
              tarvitse huolehtia kurssimaksuista tai koulumatkoista, vaan voit
              opiskella silloin kun sinulle sopii, missä ikinä oletkin.
            </Typography>
            <Typography>
              Kurssit ovat erittäin suosittuja. Esimerkiksi Ohjelmoinnin MOOCiin
              on osallistunut kymmeniä tuhansia ohjelmoinnista kiinnostuneita --
              kurssia on käytetty myös yhtenä väylänä tietojenkäsittelytieteen
              opintoihin Helsingin yliopistolle keväästä 2012 lähtien.
            </Typography>
          </Typography>
        </StyledExpansionPanelDetails>
      </StyledExpansionPanel>

      <StyledExpansionPanel>
        <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <TitleWrapper>
            <StyledDefaIcon />
            <Typography className={classes.heading}>
              Ensimmäisen vuoden opinnot kaikille
            </Typography>
          </TitleWrapper>

          <StyledTagline>
            Syksyllä 2019 alkava Digital Education for All -hanke tarjoaa
            uniikin mahdollisuuden opiskella tietojenkäsittelytieteen osaston
            ensimmäisen vuoden kurssit kotoasi.
          </StyledTagline>
        </StyledExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <Typography>
            Uusin avaus kaikille avoimessa digitaalisessa opetuksessa on
            syksyllä 2019 alkava Helsingin yliopiston johtama Digital Education
            for All -hanke. Opetus- ja kulttuuriministeriön rahoittamassa
            hankkeessa Helsingin yliopisto, Aalto-yliopisto, Jyväskylän
            yliopisto, Oulun yliopisto ja Turun yliopisto avaa ensimmäisen
            vuoden tietojenkäsittelytieteen opintojaan kaikille.
          </Typography>
          <Button href="http://google.com" variant="contained" color="primary">
            Lue lisää
          </Button>
        </StyledExpansionPanelDetails>
      </StyledExpansionPanel>

      <StyledExpansionPanel>
        <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <TitleWrapper>
            <StyledTeacherIcon />
            <Typography className={classes.heading}>
              Opeta kursseja omassa luokassasi
            </Typography>
          </TitleWrapper>

          <StyledTagline>
            Opettaja! Saat kurssit omaan luokkaasi omilla pistelistoillasi ja
            omalla aikataulullasi.
          </StyledTagline>
        </StyledExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <Typography>
            Opettaja! Saat osan kursseistamme ilmaiseksi käyttöön luokkaasi
            siten, että voit määritellä tehtävien määräajat ymym. Kaikkia
            kursseja saa käyttää osana opetusta. Katso lisää
            Opettajalle-sivulta!
          </Typography>
        </StyledExpansionPanelDetails>
      </StyledExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleExpansionPanel);
