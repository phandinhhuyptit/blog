import styled, { css } from "styled-components";

export const SectionWrapper = styled.div`
  position: relative;
  .title {
    padding-right: 90px;
    box-sizing: border-box;
    padding: 0px 0px 10px;
    color: #2f2f33;
    display: block;
    font-size: 18px;
    margin: 0;
    position: relative;
    font-weight: 500;
    font-family: "Nunito";
    text-align: left;
    border-bottom: 1px solid #f7f7f7;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 90%;
      height: 1px;
      background: #ccc;
      bottom: -1px;
    }
  }
  .right-all {
    position: absolute;
    right: 0px;
    top: 8px;
    .link {
      text-decoration: none;
      color: #7b7b7b;
    }
  }

  .content-wrapper {
    .content {
      margin: 0 auto;
      padding: 20px 0px;
      .image-wrapper {
        width: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        margin-bottom: 20px;
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
    }
  }
  .article-wrapper {
    .article {
      .post {
        .parentover {
          .list-media {
            border-radius: 10px;
            position: relative;
            .img-content {
              border-radius: 10px;
              max-width: 100%;
              position: relative;
            }
            .post-share {
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              display: table;
              border-radius: 10px;
              background: rgba(0, 0, 0, 0.5);
              opacity: 0;
              transition: 0.2s all ease-in-out;
              .cell {
                vertical-align: middle;
                display: table-cell;
                text-align: center;
                .list-inline {
                  list-style: none;
                  box-sizing: border-box;
                  width: 100%;
                  border-radius: 10px;
                  display: flex;
                  justify-content: center;
                  padding: 0px 92px;
                  filter: blur(20px);
                  line-height: 1.2;
                  transition: 0.6s all ease;
                  li {
                    padding: 15px;
                    list-style-type: none;
                    float: left;
                    color: white;
                    .icon-facebook {
                      width: 25px;
                      height: 25px;
                    }

                    .icon-google {
                      width: 30px;
                      height: 25px;
                    }
                    .icon-twitter {
                      width: 25px;
                      height: 25px;
                    }
                  }
                }
              }
              &:hover {
                .list-inline {
                  filter: blur(0px);
                }
              }
            }
          }
          .box-list {
            margin-top: -25px;
            padding: 0px 15px;
            position: relative;
            .box-inside {
              border-radius: 10px;
              box-shadow: rgba(0, 0, 0, 0.15) 0 7px 7px;
              margin-bottom: 15px;
              background: #fff;
              padding: 10px 20px;
              box-sizing: border-box;
              .list-content {
                .entry-header {
                  .entry-title {
                    font-size: 36px;
                    line-height: 1.2;
                    margin-bottom: 15px;
                    a {
                      font-weight: 600;
                      line-height: 42px;
                      font-size: 18px;
                      color: rgb(47, 47, 51);
                    }
                  }
                }
              }
              .article-meta {
                padding-bottom: 10px;
                .author {
                  height: 20px;
                  a {
                    display: inline-flex;
                    align-items: flex-end;
                    color: rgb(142, 142, 149);
                    font-weight: 400;
                    font-size: 12px;
                    .icon-user {
                      color: rgb(142, 142, 149);
                      width: 15px;
                      height: 14px;
                      margin: 0px 4px;
                    }
                  }
                }
                .posted-on {
                  height: 20px;
                  a {
                    display: inline-flex;
                    align-items: flex-end;
                    color: rgb(142, 142, 149);
                    font-weight: 400;
                    font-size: 12px;
                    .icon-clock {
                      color: rgb(142, 142, 149);
                      width: 15px;
                      height: 14px;
                      margin: 0px 4px;
                    }
                  }
                }
              }
              .entry-content {
                color: rgb(142, 142, 149);
                line-height: 24px;
                font-size: 14px;
                .btn-read {
                  border: 1px solid rgb(234, 234, 241);
                  padding: 5px 20px;
                  display: table;
                  margin-top: 20px;
                  text-transform: uppercase;
                  font-size: 12px;
                  &:hover {
                    border-color: #7b7b7b;
                    background: #7b7b7b;
                    color: #fff;
                  }
                }
              }
            }
          }
          &:hover {
            .post-share {
              border-radius: 10px;
              opacity: 1;
              transition: 0.2s all ease-in-out;
            }
          }
        }
      }
    }
  }
`;
