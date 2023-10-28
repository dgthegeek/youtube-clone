import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'


const VideoCard = ({ video }) => {
  return (
    <Card sx={{width: {md: '320px', xs: '100%'}}}>

      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia sx={{ height: '250px', width: '100%' }} image={video.snippet?.thumbnails?.high?.url || demoThumbnailUrl} />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px', marginTop: 0 }}>

        <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
          <p style={{color: 'white', fontWeight: 'bold'}}>{video?.snippet?.title?.slice(0, 50) || demoVideoTitle.slice(0, 50)}</p>
        </Link>

        <Link to={video?.id?.channelId ? `/channel/${video.snippet?.channelId}` : demoChannelUrl}>
          <p style={{color: 'grey'}}>{video?.snippet?.channelTitle || demoChannelTitle}</p>
        </Link>

      </CardContent>
    </Card>
  )
}

export default VideoCard