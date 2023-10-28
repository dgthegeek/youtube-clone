import { Stack, Box } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


const Videos = ({ videos }) => {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.map((item, index) => (
            <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {/* {item.id.ChannelId && <ChannelCard channel={item}/>} */}
            </Box>
            )
        )}
    </Stack>
  )
}

export default Videos