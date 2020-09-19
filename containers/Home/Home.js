import React from "react";
import { Row, Col } from "antd";
import { HomeWrapper } from "./styled";
import Featured from "./Featured";
import Content from "./Content";

const Home = () => {
  return (
    <HomeWrapper>
      <div className="container">
        <Featured />
        <Content />
      </div>
    </HomeWrapper>
  );
};

export default Home;
