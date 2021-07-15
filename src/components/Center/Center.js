import React, { useEffect, useState, useContext } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Center.css";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

// #f7fbff    #deebf7    #c6dbef
// #9ecae1    #6baed6    #4292c6
// #2171b5    #08519c    #08306b
const Center = () => {
  const { user } = useContext(AppContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(`/api/post/timeline/${user._id}`);
      setPosts(data);
    };
    fetchPosts();
  }, [user._id]);

  console.log(user._id);

  return (
    <div className="center-component">
      <Share />
      {posts.map((post) => {
        return <Post post={post} key={post._id} />;
      })}
    </div>
  );
};

export default Center;
