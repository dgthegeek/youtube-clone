import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { FetchData } from "../utils/API";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    FetchData(`videos?part=snippet.statistics&id=${id}`).then((data) =>
      setVideoDetail(data[0])
      );
  }, [id]);
  console.log({videoDetail});
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Stack
          sx={{
            width: "100%",
            position: "sticky",
            top: "86px",
            position: "scroll",
          }}
            direction= "row"

        >
          <Box>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            
          </Box>
          <Box>
            <Typography color="white" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Typography color="#e1e1e1" variant="h8" fontWeight="" p={2} pt={2}>
              {videoDetail?.snippet?.channelTitle}
            </Typography>
            <Box>
            <Typography color="#e1e1e1" variant="h8" fontWeight="" p={2} pt={2}>
              {videoDetail?.statistics?.viewCount} views
            </Typography>
            <Typography color="#e1e1e1" variant="h8" fontWeight="" p={2} pt={2}>
              {videoDetail?.statistics?.likeCount} Likes
            </Typography>
            </Box>
          </Box>
        </Stack>

        <Stack
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {/* I will put the videos here */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
