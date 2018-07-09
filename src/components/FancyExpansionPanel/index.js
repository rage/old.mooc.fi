import React from "react";
import styled from "styled-components";

import ExpansionPanelItem from "./ExpansionPanelItem";

const Wrapper = styled.div``;

class FancyExpansionPanel extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.items.map(item => <ExpansionPanelItem key={item.title} item={item} />)}
      </Wrapper>
    );
  }
}

export default FancyExpansionPanel;
