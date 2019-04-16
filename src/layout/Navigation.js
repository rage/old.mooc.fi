import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import styled from "styled-components";
import LanguageSelector from "./LanguageSelector";
// import NavigationButton from "../components/NavigationButton";
import Logo from "./Logo";

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

const Grower = styled.div`
  flex: 1;
`;

const StyledAppBar = styled(AppBar)`
  /* box-shadow: none !important; */
  background-color: #ffffff !important;
  color: black !important;
`;

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
    // const { auth } = this.state;

    return (
      <div className={classes.root}>
        <StyledAppBar position="sticky">
          <Toolbar>
            <Grower>
              <Logo />
            </Grower>
            {this.props.showLanguageToggle && <LanguageSelector />}
            {/* {auth && (
              <div>
                <NavigationButton
                  to="/account"
                  color="default"
                  variant="outlined"
                >
                  <AccountCircle />
                  Henrik Nygren
                </NavigationButton>
              </div>
            )} */}
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
