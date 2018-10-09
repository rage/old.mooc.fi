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
  text-align: left;
  transition: box-shadow 0.2s;
  @media only screen and (min-width: 400px) {
    width: 350px !important;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2),
      0px 2px 2px 1px rgba(0, 0, 0, 0.14), 0px 3px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

const CourseDescription = styled.p`
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.46429em;
`

const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
  ${props => props.disabled && "filter: opacity(50%);"};
`;

const CourseCard = ({ name, description, image = "", href, disabled }) => (
  <StyledA href={href}>
    <StyledButtonBase component="div" disabled={disabled}>
      <StyledCard>
        <StyledCardMedia image={image} disabled={disabled} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <CourseDescription>{description}</CourseDescription>
        </CardContent>
      </StyledCard>
    </StyledButtonBase>
  </StyledA>
);

export default withTheme()(CourseCard);
