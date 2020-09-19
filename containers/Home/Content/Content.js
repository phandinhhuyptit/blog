import React from "react";
import SectionFirst from "./Section1";
import SectionSecond from "./Section2";
import SectionThird from "./Section3";
import { ContentWrapper } from "./styled";

const Content = () => {
  return (
    <ContentWrapper>
      <SectionFirst />
      <SectionThird />
    </ContentWrapper>
  );
};

export default Content;
