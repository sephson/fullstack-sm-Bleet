import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import postImg from "../../components/images/pic1.jpg";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./SinglePost.css";
const SinglePost = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Leftbar />

        <div className="post-container">
          <main className="mainWrap">
            <img className="postImg" src={postImg} alt="" />
            <div className="userTimeWrap">
              <h3 className="postUser">Disu</h3>
              <span className="postTime">5 min ago</span>
            </div>
          </main>
          <p className="postContent">
            My first post conveying good wishes or praise to someone in response
            to an achievement or special occasion. The free space is calculated
            after any non-flexible items. In this example the total amount of
            free space available to the fr units doesn’t include the 50px
          </p>
          <div className="postInteractions">
            <span className="comments">
              <ModeCommentIcon /> 14
            </span>
            <span className="like">
              <FavoriteIcon /> 80
            </span>
          </div>
          <div className="comment-section">
            <form className="comment-form">
              <img className="shareProfileImg" src={postImg} alt="" />
              <textarea
                placeholder="Add a comment to this post"
                className="shareInput"
              />
              <button type="submit" className="commentButton">
                Comment
              </button>
            </form>
          </div>
          <div className="comment-itself">
            <main className="mainWrap">
              <img className="postImg" src={postImg} alt="" />
              <div className="userTimeWrap">
                <h3 style={{ "font-size": "1.2rem" }} className="postUser">
                  Disu
                </h3>
                <span className="postTime">5 min ago</span>
              </div>
            </main>
            <p className="postcomment">This is great. Keep it up</p>

            <main className="mainWrap">
              <img className="postImg" src={postImg} alt="" />
              <div className="userTimeWrap">
                <h3 style={{ "font-size": "1.2rem" }} className="postUser">
                  Disu
                </h3>
                <span className="postTime">5 min ago</span>
              </div>
            </main>
            <p className="postcomment">This is great. Keep it up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
