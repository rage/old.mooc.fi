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
  width: 345px;
`;

const StyledA = styled.a`
  text-decoration: none;
  width: 345px;
`;

const StyledCard = styled(Card)`
  width: 345px;
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
          <Typography component="p">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Typography>
        </CardContent>
      </StyledCard>
    </StyledButtonBase>
  </StyledA>
);

export default withTheme()(CourseCard);
