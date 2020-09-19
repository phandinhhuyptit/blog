import styled, { css } from "styled-components";

export const FeaturedWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0px;
  .image-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    .thumb {
      height: 500px;
      .img {
        background: url("https://4.bp.blogspot.com/-EMeuhDkApoc/WtinIelAkHI/AAAAAAAABMQ/mlss9kdL1fEL1s-6aKLN7GI3RX3pmjDNgCLcBGAs/s1600/pexels-photo-125521.jpeg")
          no-repeat center center;
        background-size: cover;
        display: block;
        height: 500px;
      }
      .trap {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(40, 35, 40, 0.05);
      }
      &::after {
        content: "";
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background: rgba(0, 0, 0, 0)
          linear-gradient(
            to bottom,
            transparent 0%,
            transparent 0%,
            rgba(0, 0, 0, 0.5) 100%,
            rgba(0, 0, 0, 0.1) 100%
          )
          repeat scroll 0 0;
        display: block;
        height: 100%;
      }
    }
    .content {
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: 2;
      padding: 15px;
      box-sizing: border-box;
      .label {
        .icon {
          border: 1px solid #fff;
          background: transparent;
          border-radius: 5px;
          padding: 3px 5px;
          position: relative;
          display: inline-block;
          text-transform: uppercase;
          color: #fff;
          font-size: 10px;
          position: relative;
          line-height: 11px;
        }
      }
      .title-wrapper {
        font-weight: 400;
        color: #2e2e2e;
        margin: 10px 0;
        .title {
          font-size: 18px;
          line-height: 26px;
          font-weight: 600;
        }
      }

      .author {
        color: #ccc;
        font-size: 12px;
        font-weight: 400;
        margin-right: 10px;
        &::before {
          content: "\f47d";
          font-family: "Ionicons";
          color: #bbb;
          margin-right: 5px;
        }
      }
      .time {
        color: #ccc;
        font-size: 12px;
        font-weight: 400;
        &::before {
          content: "\f402";
          font-family: "Ionicons";
          color: #bbb;
          margin-right: 5px;
        }
      }
    }
  }
  .image-wrapper-secondary {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    .thumb-secondary {
      height: 240px;
      border-radius: 10px;
      .img-secondary {
        background: url("https://4.bp.blogspot.com/-EMeuhDkApoc/WtinIelAkHI/AAAAAAAABMQ/mlss9kdL1fEL1s-6aKLN7GI3RX3pmjDNgCLcBGAs/s1600/pexels-photo-125521.jpeg")
          no-repeat center center;
        background-size: cover;
        display: block;
        height: 500px;
      }
      .trap-secondary {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(40, 35, 40, 0.05);
      }
      &::after {
        content: "";
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background: rgba(0, 0, 0, 0)
          linear-gradient(
            to bottom,
            transparent 0%,
            transparent 0%,
            rgba(0, 0, 0, 0.5) 100%,
            rgba(0, 0, 0, 0.1) 100%
          )
          repeat scroll 0 0;
        display: block;
        height: 100%;
      }
    }
    .content-secondary {
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: 2;
      padding: 15px;
      box-sizing: border-box;
      .label-secondary {
        .icon-secondary {
          border: 1px solid #fff;
          background: transparent;
          border-radius: 5px;
          padding: 3px 5px;
          position: relative;
          display: inline-block;
          text-transform: uppercase;
          color: #fff;
          font-size: 10px;
          position: relative;
          line-height: 11px;
        }
      }
      .title-wrapper-secondary {
        font-weight: 400;
        color: #2e2e2e;
        margin: 10px 0;
        .title-secondary {
          margin: 10px 0px;
          font-size: 18px;
          line-height: 26px;
          font-weight: 600;
        }
      }

      .author-secondary {
        color: #ccc;
        font-size: 12px;
        font-weight: 400;
        margin-right: 10px;
        &::before {
          content: "\f47d";
          font-family: "Ionicons";
          color: #bbb;
          margin-right: 5px;
        }
      }
      .time-secondary {
        color: #ccc;
        font-size: 12px;
        font-weight: 400;
        &::before {
          content: "\f402";
          font-family: "Ionicons";
          color: #bbb;
          margin-right: 5px;
        }
      }
    }
  }
`;
