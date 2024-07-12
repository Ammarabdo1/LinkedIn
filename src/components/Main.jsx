import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import MovieIcon from "@mui/icons-material/Movie";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import ArticleIcon from "@mui/icons-material/Article";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RecommendIcon from "@mui/icons-material/Recommend";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import PostModal from "./PostModal";
import { PulseLoader } from "react-spinners";
import { connect } from "react-redux";
import { getArticlesAPI } from "../actions";

const Main = (props) => {
  const [showModal, setShowModel] = useState("close");

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModel("close");
        break;

      case "close":
        setShowModel("open");
        break;

      default:
        setShowModel("close");
    }
  };
  return (
    <Container>
      <ShareBox>
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} />
          ) : (
            <img src="Images/user.svg" alt="" />
          )}
          <button onClick={handleClick} disabled={props.loading ? true : false}>
            Start a post
          </button>
        </div>
        <div>
          <button>
            <AddPhotoAlternateIcon
              className="img"
              style={{ color: "#63B0F2" }}
            />
            <span>Photo</span>
          </button>

          <button>
            <MovieIcon className="img" style={{ color: "#94BF75" }} />
            <span>video</span>
          </button>

          <button>
            <EditCalendarIcon className="img" style={{ color: "#D99441" }} />
            <span>Event</span>
          </button>

          <button>
            <ArticleIcon className="img" style={{ color: "#F28A80" }} />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>

      <Content>
        {props.loading && <PulseLoader color="#5ac2bd" />}
        {props.articles.length === 0 ? (
          <p>There are no articles</p>
        ) : (
          props.articles.length > 0 &&
          props.articles.map((article, key) => (
            <Article key={key}>
              <SharedActor>
                <a>
                  <img src={article.actor.img} alt="" />
                  <div>
                    <span>{article.actor.title}</span>
                    <span>{article.actor.description}</span>
                    <span>
                      {article.actor.date.toDate().toLocalDateString()}
                    </span>
                  </div>
                </a>
                <button>
                  <MoreHorizIcon />
                </button>
              </SharedActor>
              <Description>{article.description}</Description>
              <SharedImg>
                <a>
                  {!article.sharedImg && article.video ? (
                    <ReactPlayer width={"100%"} url={article.video} />
                  ) : (
                    article.shareImg && <img src={article.sharedImg} />
                  )}
                </a>
              </SharedImg>
              <SocialCounts>
                <li>
                  <button>
                    <RecommendIcon style={{ color: "#185D84" }} />
                    <FavoriteIcon style={{ color: "red" }} />
                    <span>75</span>
                  </button>
                </li>
                <li>
                  <a>2 comments</a>
                </li>
              </SocialCounts>
              <SocialActions>
                <button>
                  <ThumbUpOffAltIcon style={{ color: "#185D84" }} />
                  <span>Like</span>
                </button>

                <button>
                  <MapsUgcIcon style={{ color: "#185D84" }} />
                  <span>Comment's</span>
                </button>

                <button>
                  <ShareIcon style={{ color: "#185D84" }} />
                  <span>Share</span>
                </button>

                <button>
                  <SendIcon style={{ color: "#185D84" }} />
                  <span>Send</span>
                </button>
              </SocialActions>
            </Article>
          ))
        )}
      </Content>
      {props.articles.map((article, key) => (
        <Article key={key}>
          <SharedActor>
            <a>
              <img src={article.actor.img} alt="" />
              <div>
                <span>{article.actor.title}</span>
                <span>{article.actor.description}</span>
                <span>{article.actor.date.toDate().toLocalDateString()}</span>
              </div>
            </a>
            <button>
              <MoreHorizIcon />
            </button>
          </SharedActor>
          <Description>{article.description}</Description>
          <SharedImg>
            <a>
              {!article.sharedImg && article.video ? (
                <ReactPlayer width={"100%"} url={article.video} />
              ) : (
                article.shareImg && <img src={article.sharedImg} />
              )}
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <RecommendIcon style={{ color: "#185D84" }} />
                <FavoriteIcon style={{ color: "red" }} />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <ThumbUpOffAltIcon style={{ color: "#185D84" }} />
              <span>Like</span>
            </button>

            <button>
              <MapsUgcIcon style={{ color: "#185D84" }} />
              <span>Comment's</span>
            </button>

            <button>
              <ShareIcon style={{ color: "#185D84" }} />
              <span>Share</span>
            </button>

            <button>
              <SendIcon style={{ color: "#185D84" }} />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      ))}
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        .img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0px;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: #000000;
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: #00000099;
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: #000000e6;
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
