import { Stack, Box } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2}>
        {videos.map((item, index) => (
            <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
            )
        )}
    </Stack>
  )
}

export default Videos