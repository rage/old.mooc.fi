import React from "react";
import styled from "styled-components";

import Background from "../images/laptops.jpg";

const Headline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  align-content: center;
  justify-content: center;
  background: url(${Background});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  height: 700px;
  width: 100%;
  z-index: -100;
`;

export default () => (
  <Headline>

  </Headline>
);
