import React from "react";
import LanguageContext, { languages } from "../contexes/LanguageContext";
import logo from "../images/logo.png";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 0.5rem;
`;

const LogoTypography = styled(Typography)`
  flex: 1;
  font-family: "Open Sans Condensed", sans-serif !important;
  font-size: 1.75rem !important;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`;

export default () => (
  <LanguageContext.Consumer>
    {language => {
      const to = language === languages.finnish ? "/" : "/en";
      return (
        <StyledLink to={to}>
          <LogoImg src={logo} />
          <LogoTypography variant="h6" color="inherit">
            MOOC.fi
          </LogoTypography>
        </StyledLink>
      );
    }}
  </LanguageContext.Consumer>
);
