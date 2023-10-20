import React from "react";
import "../scss/app/app.scss";
import PageLayout from "../components/page-layout/page-layout";
import Sidebar from "../components/sidebar/sidebar";
import Content from "../components/content/content";

// interface AppProps {}

const App: React.FunctionComponent = () => {
  return (
    <PageLayout>
      <div className="main">
        <div className="main-container">
          <Sidebar />
          <Content />
        </div>
      </div>
    </PageLayout>
  );
};

export default App;
