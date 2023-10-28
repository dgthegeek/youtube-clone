import { Stack, Box } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'


const Videos = ({ videos }) => {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2}>
        {videos.map((item, index) => (
            <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
            </Box>
            )
        )}
    </Stack>
  )
}

export default Videos