import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Videos from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { FetchData } from "../utils/API";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    FetchData(`channels?part=snippet&id=${id}`)
      .then(data => {
        setChannelDetail(data?.items)
      })
    FetchData(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => {
        setVideos(data?.items)
      })
      console.log(id);
  }, [id]);

  console.log(channelDetail);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: 'grey',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;