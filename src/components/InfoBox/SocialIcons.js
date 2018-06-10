import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

import { ReactComponent as RedditIcon } from "../../images/svg-icons/reddit3.svg";
import { ReactComponent as KktIcon } from "../../images/svg-icons/kktlogo.svg";
import { ReactComponent as ClassroomIcon } from "../../images/svg-icons/classroom.svg";
import { ReactComponent as YoutubeIcon } from "../../images/svg-icons/youtube.svg";
import { ReactComponent as VocabIcon } from "../../images/svg-icons/vocab.svg";
import { ReactComponent as TwitterIcon } from "../../images/svg-icons/twitter.svg";

const styles = theme => ({
  social: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "5px",
    "&:hover": {
      "& svg": {
        fill: theme.info.colors.socialIconsHover
      }
    }
  },
  svg: {
    width: "40px",
    height: "40px",
    fill: theme.info.colors.socialIcons,
    transition: "all .5s"
  }
});

const Socialcons = props => {
  const { classes } = props;
  const items = config.authorSocialLinks;
  const icons = {
    twitter: TwitterIcon,
    vocab: VocabIcon,
    kakao: KktIcon,
    reddit: RedditIcon,
    classroom: ClassroomIcon,
    youtube: YoutubeIcon
  };

  return (
    <div className={classes.social}>
      {items.map(item => {
        const Icon = icons[item.name];
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
  );
};

Socialcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Socialcons);
