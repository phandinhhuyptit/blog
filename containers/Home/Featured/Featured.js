import React from "react";
import { FeaturedWrapper } from "./styled";
import { Row, Col } from "antd";

const Content = () => {
  return (
    <FeaturedWrapper>
      <Row gutter={[20,0]} className="featured-wrapper">
        <Col span={12}>
          <div className="image-wrapper">
            <div className="thumb">
              <a
                src="https://morpho-blossom.blogspot.com/2018/04/capturing-correct-moment.html"
                className="img"
              ></a>
              <div className="trap"></div>
            </div>
            <div className="content">
              <div className="label">
                <a className="icon"> building </a>
              </div>
              <h3 className="title-wrapper">
                <a
                  className="title"
                  src="https://morpho-blossom.blogspot.com/2018/04/capturing-correct-moment.html"
                >
                  Capturing the correct moment
                </a>
              </h3>
              <span className="author"> Blossom Themes </span>
              <span className="time"> Apr 19, 2018 </span>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <Row gutter={[0, 20]} >
            <Col span={24}>
              <div className="image-wrapper-secondary">
                <div className="thumb-secondary">
                  <a
                    src="https://morpho-blossom.blogspot.com/2018/04/capturing-correct-moment.html"
                    className="img-secondary"
                  ></a>
                  <div className="trap-secondary"></div>
                </div>
                <div className="content-secondary">
                  <div className="label-secondary">
                    <a className="icon-secondary"> building </a>
                  </div>
                  <h3 className="title-wrapper-secondary">
                    <a
                      className="title-secondary"
                      src="https://morpho-blossom.blogspot.com/2018/04/capturing-correct-moment.html"
                    >
                      Capturing the correct moment
                    </a>
                  </h3>
                  <span className="author-secondary"> Blossom Themes </span>
                  <span className="time-secondary"> Apr 19, 2018 </span>
                </div>
              </div>
            </Col>
            <Col span={24}>
              <div className="image-wrapper-secondary">
                <div className="thumb-secondary">
                  <a
                    src="https://morpho-blossom.blogspot.com/2018/04/capturing-correct-moment.html"
                    className="img-secondary"
                  ></a>
                  <div className="trap-secondary"></div>
                </div>
                <div className="content-secondary">
                  <div className="label-secondary">
                    <a className="icon-secondary"> building </a>
                  </div>
                  <h3 className="title-wrapper-secondary">
                    <a
                      className="title-secondary"
                      src="https://morpho-blossom.blogspot.com/2018/04/capturing-correct-moment.html"
                    >
                      Capturing the correct moment
                    </a>
                  </h3>
                  <span className="author-secondary"> Blossom Themes </span>
                  <span className="time-secondary"> Apr 19, 2018 </span>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </FeaturedWrapper>
  );
};

export default Content;
