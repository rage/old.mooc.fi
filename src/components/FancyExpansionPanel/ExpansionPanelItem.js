import React from "react";
import { Typography, Button, ButtonBase } from "@material-ui/core";
import { Motion, spring } from "react-motion";

import styled from "styled-components";
import grey from "@material-ui/core/colors/grey";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { trackElementHeight } from "../../util/trackHeight";

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
  display: block !important;
  text-align: left !important;
  padding: 1rem !important;
  overflow: hidden;
`;

const LongDescription = styled.div`
  height: calc(var(--open-ratio) * var(--calculated-height) * 1px);
  overflow: hidden;
  padding: 0 1.85rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShortDescription = styled.div`
  padding: 0 1.85rem;
`;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  align-self: right;
  transition: all 0.3s !important;
  transform: rotateZ(${props => (props.expanded ? "-180" : "0")}deg);
`;

const StyledButton = styled(Button)`
  margin: 1rem !important;
`;

export default class ExpansionPanelItem extends React.Component {
  constructor() {
    super();
    this.longDescriptionRef = React.createRef();
  }

  state = {
    expanded: false,
    disableRipple: false
  };

  componentDidMount() {
    const current = this.longDescriptionRef.current;
    trackElementHeight(current)
  }

  render() {
    const { item } = this.props;
    const Icon = styled(item.icon)`
      margin-right: 0.3rem;
      color: ${grey[700]};
    `;
    return (
      <Card
        component="div"
        disableRipple={this.state.disableRipple}
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
        <Motion style={{ openRatio: spring(this.state.expanded ? 1 : 0) }}>
          {({ openRatio }) => {
            return (
              <LongDescription
                style={{ "--open-ratio": `${openRatio}` }}
                expanded={this.state.expanded ? "1" : undefined}
                innerRef={this.longDescriptionRef}
              >
                <Typography>{item.longDescription}</Typography>
                {item.buttonLink && (
                  <StyledButton
                    variant="contained"
                    color="primary"
                    href={item.buttonLink}
                    onClick={e => {
                      e.stopPropagation();
                      this.setState({ disableRipple: true });
                    }}
                  >
                    {item.buttonText}
                  </StyledButton>
                )}
              </LongDescription>
            );
          }}
        </Motion>
      </Card>
    );
  }
}
