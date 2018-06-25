import React, { Fragment } from "react";
import withLayout from "../layout/withLayout";
import Container from "../components/Container";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import styled from "styled-components";
import AccountInfo from "../components/AccountInfo";
import ScoreProgress from "../components/ScoreProgress";

const CourseResultCard = styled(Card)`
  margin-bottom: 3rem;
`;

const Progress = styled.div`
  padding: 1rem;
`;

class Account extends React.Component {
  state = {
    value: 0
  };

  render() {
    return (
      <Fragment>
        <Container>
          <AccountInfo />
          <Paper className={this.props.classes.root}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Home" />
              <Tab label="Settings" />
            </Tabs>
          </Paper>
          <div>
            <Typography variant="display1">Courses</Typography>
            <p>
              Here are results from some of the courses you have completed with
              your mooc.fi account.
            </p>
            <CourseResultCard>
              <CardContent>
                <Typography variant="headline">
                  Ohjelmoinnin MOOC 2018
                  <Progress>
                    <ScoreProgress name="Part 1" progress={80} />
                    <ScoreProgress name="Part 2" progress={60} />
                    <ScoreProgress name="Part 3" progress={90} />
                    <ScoreProgress name="Part 4" progress={20} />
                  </Progress>
                </Typography>
              </CardContent>
            </CourseResultCard>
            <CourseResultCard>
              <CardContent>
                <Typography variant="headline">Cyber Security Base</Typography>
                <p>No results available yet.</p>
              </CardContent>
            </CourseResultCard>
            <CourseResultCard>
              <CardContent>
                <Typography variant="headline">Elements of AI</Typography>
                <p>No results available yet.</p>
              </CardContent>
            </CourseResultCard>
          </div>
        </Container>
      </Fragment>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: "2rem"
  }
};

export default withLayout(withStyles(styles)(Account));
