import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { signOut } from "../../services/moocfi";

const List = styled.ol`
  li {
    margin-bottom: 1.5rem;
  }
`;

export default ({ email, courseDetails }) => (
  <div>
    <p>Follow these steps:</p>

    <List>
      <li>
        Note that you have to use the email address "{email}" in step 2 (without
        quotes). If you use any other email address, you won't get your credits.
      </li>
      <li>
        Fill the following form:{" "}
        <a
          href={courseDetails.formUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {courseDetails.formUrl}
        </a>
      </li>
      <li>
        Fill in "{email}" without quotes in the box "Your email address on the
        MOOC course".
      </li>
      <li>
        {" "}
        If you want a notice email when your credits have been registered check
        the box under use of personal data "A notification of completed studies
        will be sent to my email (including the grade)".
      </li>
      <li>Registration of the ECTS takes ca. 6 weeks after enrollment.</li>
    </List>

    <p>
      {" "}
      NB! If you are a student of The University of Helsinki you need to enroll
      on the course according to the instructions above to be able to get your
      credits registered. The ECTS are only registered to students who have
      enrolled on the course through The University of Helsinki Open University.
    </p>

    <Button variant="contained" color="primary" onClick={signOut}>
      Sign out
    </Button>
  </div>
);
