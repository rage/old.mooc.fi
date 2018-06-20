import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Button } from "@material-ui/core";

import logo from "../images/logo.png";
import styled from "styled-components";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
});

const LogoImg = styled.img`
  width: 50px;
  margin-right: 0.5rem;
`;

const StyledAccountCircle = styled(AccountCircle)`
  margin-right: 0.3rem;
`

const StyledAppBar = styled(AppBar)`
  /* box-shadow: none !important; */
  background-color: #FFFFFF !important;
  color: black !important;
`

const LogoTypography = styled(Typography)`
  flex: 1;
  font-family: 'Open Sans Condensed', sans-serif !important;
  font-size: 1.75rem !important;
`

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth } = this.state;

    return (
      <div className={classes.root}>
        <StyledAppBar position="sticky">
          <Toolbar>
            <LogoImg src={logo} />
            <LogoTypography
              variant="title"
              color="inherit"
            >
              MOOC.fi
            </LogoTypography>
            <Button>
              Change to English
            </Button>
            {auth && (
              <div>
                <Button color="default" variant="outlined">
                  {" "}
                  <StyledAccountCircle />
                  Henrik Nygren
                </Button>
              </div>
            )}
          </Toolbar>
        </StyledAppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
