import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'


const VideoCard = ({ video }) => {
  return (
    <Card>
      <Link to={video.id.videoId? `/video/${video.id.videoId}`: null}>
      <CardMedia sx={{height:'200px', width:'150px'}} image={video.snippet?.thumbnails?.high?.url} />
      </Link>
    </Card>
  )
}

export default VideoCard