import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Amit is back", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: India news", "Top news - 9099 readers")}
      {newsArticle("Bitcoin breaks $22k", "Top news - 8688 readers")}
      {newsArticle("Is Redux too good", "Code - 182 readers")}
      {newsArticle("tesla hits new high", "Cars - 8099 readers")}
      {newsArticle("Coronavirus: India news", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: India news", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: India news", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: India news", "Top news - 9099 readers")}
    </div>
  );
}

export default Widgets;
