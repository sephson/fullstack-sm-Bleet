import React, { useState, useEffect, useContext } from "react";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";
import "./Post.css";
import { AppContext } from "../../context/AppContext";

const Post = ({ post }) => {
  const { user: currentUser } = useContext(AppContext);
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(`/api/user?userId=${post.userId}`);
      setUser(data);
    };

    fetchUsers();
  }, [post]);
  console.log(user);

  return (
    <>
      <Link>
        <div className="post-container">
          <main className="mainWrap">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postImg"
                src={
                  user.profilePicture
                    ? pf + user.profilePicture
                    : pf + "person/a.png"
                }
                alt=""
              />
            </Link>
            <div className="userTimeWrap">
              <h3 className="postUser">{user.username}</h3>
              <span className="postTime">{format(post.createdAt)}</span>
            </div>
          </main>
          <p className="postContent">{post.content}</p>
          <div className="postInteractions">
            <span className="comments">
              <ModeCommentIcon /> {post.comments.length}
            </span>
            <span className="like">
              <FavoriteIcon /> {like}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Post;
