import { Avatar } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import React, { forwardRef } from "react";
import "./Post.css";
import InputOptions from "./InputOptions";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  console.log(typeof description, "########");
  return (
    <div ref={ref} className="posts">
      <div className="posts_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="posts_info">
          <h2>{typeof name === "object" ? "[Object object]" : name} </h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="posts_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOptions Icon={SendOutlinedIcon} title="send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
