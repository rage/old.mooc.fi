import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import CourseCard from "../components/CourseCard";

import LanguageContext, { languages } from "../contexes/LanguageContext";

const CoursesWrapper = styled.div`
  padding-top: 5rem;
  width: 100%;
  background-color: white;
`;

const CourseGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  margin-bottom: 4rem !important;
`;

export default ({ courses, upcomingCourses }) => (
  <LanguageContext.Consumer>
    {language => (
      <Fragment>
        <CoursesWrapper>
          <StyledTypography variant="display2">
            {language === languages.finnish ? "Kurssit" : "Courses"}
          </StyledTypography>
          <CourseGrid>
            {courses.map(course => (
              <CourseCard
                name={course.name}
                description={course.description}
                image={course.image}
                href={course.href}
              />
            ))}
          </CourseGrid>
        </CoursesWrapper>
        <CoursesWrapper>
          <StyledTypography variant="display2">
            {language === languages.finnish ? "Tulossa" : "Coming up"}
          </StyledTypography>
          <CourseGrid>
            {upcomingCourses.map(course => (
              <CourseCard
                name={course.name}
                description={course.description}
                image={course.image}
                href={course.href}
                disabled
              />
            ))}
          </CourseGrid>
        </CoursesWrapper>
      </Fragment>
    )}
  </LanguageContext.Consumer>
);
