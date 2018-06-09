import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import config from "../../content/meta/config";

const styles = theme => ({});

const Contact = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="수강신청" />
        <Content>
          오늘 공부를 시작해보세요! 이메일로 수강신청 해주시면 최대한 빠르게 도와드리겠습니다.<br />
          이메일로 직접 수강신청을 해주셔도 되고: <Obfuscate email={config.contactEmail} />
          <br /> 아래 양식을 사용해 직접 수강신청을 해주셔도 됩니다.
        </Content>
        <Form />
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
