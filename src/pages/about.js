import React from "react";
import SimpleLocalize from "../SimpleLocalize";
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../LinkTranslated";

function AboutPage(props) {
  // const language = props.pageContext.language;
  return (
    <SimpleLocalize {...props}>
      <h1>
        <FormattedMessage
          id="about-us"
          defaultMessage="About us"
        />
      </h1>

      <LinkTranslated
        className="btn btn-link"
        href="/"
      >
        <FormattedMessage
          id="homepage"
          defaultMessage="Homepage"
        />
      </LinkTranslated>

    </SimpleLocalize>
  );
}

export default AboutPage;
