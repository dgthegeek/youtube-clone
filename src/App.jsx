import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

import { NavBar, SearchFeed, VideoDetail, ChannelDetail, Feed } from './components'

import { Box } from '@mui/material'
import './App.css'


const App = () => {
  <BrowserRouter>
  <Box>
    <NavBar/>
    <Routes>
      <Route path="/" exact element={ <Feed/> }/>
      <Route path="shearch/:searchInput" element={ <SearchFeed/> } />
      <Route path="video/:id" element={ <VideoDetail/> }/>
      <Route path="/channel/:id" element={ <ChannelDetail/> }/>

    </Routes>
  </Box>
  </BrowserRouter>
}

export default App