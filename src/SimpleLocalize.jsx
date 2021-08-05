import React from "react";
import {IntlProvider} from "react-intl";

function SimpleLocalize(props) {
  const messages = props.pageContext.messages;
  const language = props.pageContext.language;
  return (
    <IntlProvider
      locale={language}
      messages={messages}>
      {props.children}
    </IntlProvider>
  );
}

export default SimpleLocalize;
