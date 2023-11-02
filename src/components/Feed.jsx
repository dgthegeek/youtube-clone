import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { FetchData } from "../utils/API";
import { useState } from "react";



const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setvideos] = useState([])

    useEffect(
        () => {
            FetchData(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setvideos(data))
        }, [selectedCategory]
    )
    return (
        <Stack sx={{ flexDirection: 'column', marginTop: '0px', overflowY: 'scroll'}}>
            <Box
                sx={{
                    overflowY: 'auto',
                    flexDirection :'row',
                    overflowX: 'auto',
                    borderBottom: '0.5px solid red',
                    marginTop: '10px',
                    position: 'sticky'
                }}
            >
                <SideBar
                selectedCategory= {selectedCategory}
                setSelectedCategory= {setSelectedCategory}

                />
            </Box>
            <Box
                sx={{
                    msOverflowY: 'auto',
                    height: { sx: 'auto', md: '92vh' },
                    marginTop: '5px',
                    overflowY: 'scroll'
                }}>
                <h1 style={{ color: '#fff', marginBottom: 2 }}> <span style={{color: 'red'}}>{selectedCategory}</span> Videos</h1>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed
