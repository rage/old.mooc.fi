import React, { Fragment } from "react";
import withLayout from "../layout/withLayout";
import LanguageContext, { languages } from "../contexes/LanguageContext";
import { finnishCourses, englishCourses } from "../constants/CourseConstants";
import {
  finnishExplanations,
  englishExplanations,
} from "../constants/ExplanationConstants";

import Courses from "../components/Courses";
import Explanation from "../components/Explanation";

import BannerBackground from "../components/BannerBackground";
import MailingListForm from "../components/MailingListForm";

class Index extends React.Component {
  render() {
    return (
      <div>
        <BannerBackground />
        <LanguageContext.Consumer>
          {language => {
            return (
              <Fragment>
                <Explanation
                  texts={
                    language === languages.finnish
                      ? finnishExplanations
                      : englishExplanations
                  }
                />
                <Courses
                  courses={
                    language === languages.finnish
                      ? finnishCourses
                      : englishCourses
                  }
                />
              </Fragment>
            );
          }}
        </LanguageContext.Consumer>
        <MailingListForm />
      </div>
    );
  }
}

export default withLayout(Index);
