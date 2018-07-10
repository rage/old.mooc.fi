import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202124 !important;
  color: white;
  padding: 1rem;
  text-align: center;
`;

export default () => <Footer>Please consider the environment before printing this footer.</Footer>;
