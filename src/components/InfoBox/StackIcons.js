import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import { ReactComponent as AlgoliaIcon } from "../../images/svg-icons/algolia.svg";
import { ReactComponent as ReactIcon } from "../../images/svg-icons/react.svg";
import { ReactComponent as GraphqlIcon } from "../../images/svg-icons/graphql.svg";
import { ReactComponent as JssIcon } from "../../images/svg-icons/jss.svg";
import { ReactComponent as MaterialUiIcon } from "../../images/svg-icons/material-ui.svg";
import { ReactComponent as ReduxIcon } from "../../images/svg-icons/redux.svg";
import { ReactComponent as GatsbyIcon } from "../../images/svg-icons/gatsby.svg";
import { ReactComponent as WebpackIcon } from "../../images/svg-icons/webpack.svg";
import { ReactComponent as BabelIcon } from "../../images/svg-icons/babel.svg";
import { ReactComponent as NetlifyIcon } from "../../images/svg-icons/netlify.svg";
import { ReactComponent as GoogleIcon } from "../../images/svg-icons/google-logo.svg";

const styles = theme => ({
  stack: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "1em 2em"
    }
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "8px"
  },
  svg: {
    width: "22px",
    height: "22px"
  },
  header: {
    textAlign: "center",
    fontSize: ".85em",
    letterSpacing: ".3em",
    width: "100%",
    margin: "0 0 .8em 0",
    fontWeight: 300
  }
});

const StackIcons = props => {
  const { classes } = props;

  const items = [
    { name: "google", url: "https://www.google.com/", comp: GoogleIcon },
  ];

  return (
    <div className={classes.stack}>
      <h5 className={classes.header}>Our Partners:</h5>
      <div className={classes.box}>
        {items.map(item => {
          const Icon = item.comp;
          return (
            <a
              href={item.url}
              key={item.name}
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              <Icon className={classes.svg} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);
