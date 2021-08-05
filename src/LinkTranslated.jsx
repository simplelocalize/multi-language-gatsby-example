import React from "react";
import {Location} from '@reach/router';
import {getCurrentPageLanguage, getTranslatedPath} from "./linkUtils";

const LinkTranslated = ({children = [], className = "", href = "/"}) => {
  return (
    <Location>
      {locationProps => {
        const {pathname = ""} = locationProps.location;
        return <a className={className}
                  href={getTranslatedPath(pathname, href)}
                  hrefLang={getCurrentPageLanguage(pathname)}
        >
          {children}
        </a>;
      }}
    </Location>
  );
};

export default LinkTranslated;
