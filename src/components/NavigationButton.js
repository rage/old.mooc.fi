import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SelectorButton = styled(Button)`
  margin-left: 0.5rem !important;
  svg {
    margin-right: 0.3rem;
  }
`;

export default (props) => {
  const { to = "#", children } = props;
  return (
    <SelectorButton component={({ ...props }) => <Link to={to} {...props} />} {...props}>
      {children}
    </SelectorButton>
  );
};
