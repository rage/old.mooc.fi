import React from "react";
import { Typography, ButtonBase } from "@material-ui/core";
import { Motion, spring } from "react-motion";

import styled from "styled-components";
import grey from "@material-ui/core/colors/grey";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Header = styled.div`
  display: flex;
`;

const Heading = styled(Typography)`
  font-size: 1.3rem !important;
  color: ${grey[800]} !important;
  font-weight: 400 !important;
  flex: 1;
`;

const Card = styled(ButtonBase)`
  margin-bottom: 2rem;
  display: initial !important;
  text-align: left !important;
  padding: 1rem !important;
  overflow: hidden;
`;

const LongDescription = styled.div`
  max-height: var(--max-height);
  overflow: hidden;
  padding: 0 1.85rem;
  margin-top: 0.5rem;
`;

const ShortDescription = styled.div`
  padding: 0 1.85rem;
`;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  align-self: right;
  transition: all 0.3s !important;
  transform: rotateZ(${props => (props.expanded ? "-180" : "0")}deg);
`;

export default class ExpansionPanelItem extends React.Component {
  state = {
    expanded: false
  };
  render() {
    const { item } = this.props;
    const Icon = styled(item.icon)`
      margin-right: 0.3rem;
      color: ${grey[700]};
    `;
    return (
      <Card
        onClick={() =>
          this.setState(prev => {
            return { expanded: !prev.expanded };
          })
        }
      >
        <Header>
          <Icon />
          <Heading theme="this.props.theme">{item.title}</Heading>
          <StyledExpandMoreIcon
            expanded={this.state.expanded ? "1" : undefined}
          />
        </Header>
        <ShortDescription>
          <Typography>{item.shortDescription}</Typography>
        </ShortDescription>
        <Motion style={{ x: spring(this.state.expanded ? 100 : 0) }}>
          {({ x }) => (
            <LongDescription
              style={{ "--max-height": `${x}px` }}
              expanded={this.state.expanded ? "1" : undefined}
            >
              <Typography>{item.longDescription}</Typography>
            </LongDescription>
          )}
        </Motion>
      </Card>
    );
  }
}
