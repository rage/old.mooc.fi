import React, { Fragment } from "react";
import withRoot from "./withRoot";
import Navigation from "./Navigation";
import styled, { injectGlobal } from "styled-components";
import Footer from "./Footer";
import MailingListForm from "../components/MailingListForm"

const FOOTER_HEIGHT = 100;

injectGlobal`
  html, body, #root {
  height: 100%;
  margin: 0;
}
`;

const Content = styled.div`
  min-height: 100%;
  margin-bottom: ${FOOTER_HEIGHT}px;
`;

const Push = styled.div`
  height: ${FOOTER_HEIGHT};
`;

export default Component => {
  class Layout extends React.Component {
    render() {
      return (
        <Fragment>
          <Navigation />
          <Content>
            <Component />
            <Push />
          </Content>
          <MailingListForm />
          <Footer />
        </Fragment>
      );
    }
  }
  return withRoot(Layout);
};
