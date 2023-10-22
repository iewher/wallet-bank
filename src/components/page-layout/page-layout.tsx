import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
