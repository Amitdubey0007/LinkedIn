import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions_icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOptions_icon">
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
