import React from "react";
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../LinkTranslated";
import SimpleLocalize from "../SimpleLocalize";

function IndexPage(props) {
  // const language = props.pageContext.language;
  return (
    <SimpleLocalize {...props}>
      <h1>
        <FormattedMessage
          id="hello-world"
          defaultMessage="Hello World!"
        />
      </h1>

      <p>
        <FormattedMessage
          id="welcome-on-our-website"
          defaultMessage="Welcome on our multi-language website"
        />
      </p>

      <LinkTranslated
        className="btn btn-link"
        href="/about"
      >
        <FormattedMessage
          id="learn-more-about-us"
          defaultMessage="Learn more about us"
        />
      </LinkTranslated>


      <ul>
        <li><a href="/">English (Default)</a></li>
        <li><a href="/pl/">Polish</a></li>
        <li><a href="/es/">Spanish</a></li>
      </ul>

    </SimpleLocalize>
  );
}

export default IndexPage
