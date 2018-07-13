import React from "react";
import styled from "styled-components";

import UHLogo from "../images/uh-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  margin-bottom: 1rem;
  margin: 1rem;
`;

const Footer = styled.footer`
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #202124 !important;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const SocialContainer = styled.div`
  padding: 2rem 0;
`;

const EmailContainer = styled.div`
  padding-top: 2rem;
`

export default () => (
  <Footer>
    <EmailContainer>mooc@cs.helsinki.fi</EmailContainer>
    <SocialContainer>
      <a
        href="https://twitter.com/moocfi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon icon={faTwitter} size="3x" />
      </a>
      <a
        href="https://www.facebook.com/Moocfi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon icon={faFacebook} size="3x" />
      </a>
    </SocialContainer>
    <div>
      <a href="https://helsinki.fi">
        <img alt="University of Helsinki" src={UHLogo} />
      </a>
    </div>
  </Footer>
);
