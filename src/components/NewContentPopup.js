import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/Info";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledInfoIcon = styled(InfoIcon)`
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const StyledTypography = styled(Typography)`
  display: inline-block !important;
  color: white !important;
`;

export default class NewContentPopup extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    return (
      <Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open && this.props.updateAvailable}
          onClose={this.handleClose}
          ContentProps={{ "aria-describedby": "message-id" }}
          message={
            <Fragment>
              <StyledInfoIcon />
              <StyledTypography>
                An updated version of this page is available.
              </StyledTypography>
            </Fragment>
          }
          action={[
            <Button
              variant="raised"
              key="refresh"
              color="secondary"
              size="small"
              onClick={this.handleRefresh}
            >
              REFRESH
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Fragment>
    );
  }
}
