import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post
        postTitle={"Eren Yeager"}
        postDate={"September 24, 2023"}
        postPic={"https://material-ui.com/static/images/cards/paella.jpg"}
        postDescription={
          "A good breakfast before I kill half the world! #rumbling #tatakae #freedom"
        }
      />
      <Post
        postTitle={"Mikassa Akerman"}
        postDate={"September 20, 2023"}
        postPic={
          "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        }
        postDescription={"#wildLife #eren"}
      />
      <Post
        postTitle={"Armin Alert"}
        postDate={"September 19, 2023"}
        postPic={
          "https://material-ui.com/static/images/cards/live-from-space.jpg"
        }
        postDescription={
          "Mac Millers concert was AMAZING! Truly a night to remember! #MacMillerConcert"
        }
      />
    </Box>
  );
};

export default Feed;
