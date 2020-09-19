import React from "react";
import { SectionWrapper } from "./styled";
import { Row, Col } from "antd";

const Section = () => {
  return (
    <SectionWrapper>
      <h2 className="title">Climb the mountains</h2>
      <div className="right-all">
        <a href="www.google.com" className="link">
          {" "}
          View All{" "}
        </a>
      </div>
      <div className="content-wrapper">
        <div className="content">
    
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Section;
