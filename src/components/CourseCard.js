import React from "react";
import { withTheme } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import { ButtonBase } from "@material-ui/core";
import blue from "@material-ui/core/colors/indigo";

const StyledButtonBase = styled(ButtonBase)`
  color: ${blue[100]} !important;
`;

const StyledA = styled.a`
  text-decoration: none;
  margin: 0 auto;
  width: 290px !important;
  @media only screen and (min-width: 400px) {
    width: 350px !important;
  }
  display: block;
  margin-bottom: 2rem;
`;

const StyledCard = styled(Card)`
  height: 400px !important;
  width: 290px !important;
  @media only screen and (min-width: 400px) {
    width: 350px !important;
  }
  &:hover {
    cursor: pointer;
  }
  text-align: left;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
  ${props => props.disabled && "filter: opacity(50%);"};
`;

const CourseCard = ({ name, description, image = "", href, disabled }) => (
  <StyledA href={href}>
    <StyledButtonBase disabled={disabled}>
      <StyledCard>
        <StyledCardMedia image={image} disabled={disabled} />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
      </StyledCard>
    </StyledButtonBase>
  </StyledA>
);

export default withTheme()(CourseCard);
