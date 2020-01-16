import React from "react";
import PostTool from "./postTool";
import TopProfiler from "./topProfiler";
import PostList from "./postList";

const MainSection = () => {
  return (
    <div className="main-ws-sec">
      <PostTool />

      <div className="posts-section">
        <TopProfiler />
        <PostList />
      </div>
    </div>
  );
};

export default MainSection;
