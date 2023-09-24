import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post postTitle={"Eren Yeager"} postDate={"September 24, 2023"} />
      <Post postTitle={"Mikassa Akerman"} postDate={"September 20, 2023"} />
      <Post postTitle={"Armin Alert"} postDate={"September 19, 2023"} />
    </Box>
  );
};

export default Feed;
