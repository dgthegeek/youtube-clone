import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { FetchData } from "../utils/API";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState();
  const [videos, setVideos] = useState([]);
  const [demovideos, setdemoVideos] = useState();

  const { id } = useParams();

  useEffect(() => {
    FetchData(`videos?part=snippet.statistics&id=${id}`).then((data) =>
      setVideoDetail(data[0])
    );
    FetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data)
    );
    FetchData(`search?part=snippet&q=New`)
            .then((data) => setdemoVideos(data))
  }, [id]);
  console.log(demovideos);
  return (
    <Box minHeight="95vh">
      <Stack direction='column' justifyContent= 'center'>
        <Stack
          sx={{
            width: "100%",
            top: "86px",
            mt: '30px',
            mb: '50px'
            
          }}
          direction='column'
          justifyContent='center'
          gap={3}
        >
          <Box sx={{}} >
            <ReactPlayer
            width='100%'
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
          </Box>
          <Box>
            <Typography color="white" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Typography
              color="#e1e1e1"
              variant="h8"
              fontWeight=""
              p={2}
              pb={12}
            >
              {videoDetail?.snippet?.channelTitle}
            </Typography>
            <Box mt='15px'>
              <Typography
                color="#e1e1e1"
                variant="h8"
                fontWeight=""
                p={2}
                pt={2}
              >
                {videoDetail?.statistics?.viewCount} views
              </Typography>
              <Typography
                color="#e1e1e1"
                variant="h8"
                fontWeight=""
                p={2}
                pt={2}
              >
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
          position='scroll'
        >
          <Videos videos={videos} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
