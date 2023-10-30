import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

import { NavBar, SearchFeed, VideoDetail, ChannelDetail, Feed } from './components/import'

import { Box } from '@mui/material'
import './index.css'


const App = () => {
  return (
  <BrowserRouter>
  <Box sx={{backgroundColor: '#000'}}>
    <NavBar/>
    <Routes>
      <Route path="/" exact element={ <Feed/> }/>
      <Route path="search/:searchInput" element={ <SearchFeed/> } />
      <Route path="video/:id" element={ <VideoDetail/> }/>
      <Route path="/channel/:id" element={ <ChannelDetail/> }/>
    </Routes>
  </Box>
  </BrowserRouter>
  )
}

export default App