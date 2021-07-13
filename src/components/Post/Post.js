import React from "react";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import postImg from "../images/pic1.jpg";
import { fakePost } from "../../fakedata";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = () => {
  console.log(fakePost);
  return (
    <>
      {fakePost.map((p) => {
        return (
          <Link to="/single-post">
            <div className="post-container">
              <main className="mainWrap">
                <img className="postImg" src={postImg} alt="" />
                <div className="userTimeWrap">
                  <h3 className="postUser">Disu</h3>
                  <span className="postTime">{p.date}</span>
                </div>
              </main>
              <p className="postContent">
                My first post conveying good wishes or praise to someone in
                response to an achievement or special occasion. The free space
                is calculated after any non-flexible items. In this example the
                total amount of free space available to the fr units doesn’t
                include the 50px
              </p>
              <div className="postInteractions">
                <span className="comments">
                  <ModeCommentIcon /> {p.comments}
                </span>
                <span className="like">
                  <FavoriteIcon /> {p.like}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Post;
