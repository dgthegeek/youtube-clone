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
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row', overflowY: 'auto', marginTop: '0px' } }}>
            <Box
                sx={{
                    height: { sx: 'auto', md: '92vh' },
                    borderRight: '1px solid red',
                    px: { sx: 0, md: 2 },
                    marginTop: '20px'
                }}
            >
                <SideBar
                selectedCategory= {selectedCategory}
                setSelectedCategory= {setSelectedCategory}

                />
            </Box>
            <Box
                sx={{
                    ml: '40px',
                    msOverflowY: 'auto',
                    marginTop: '20px',
                    height: { sx: 'auto', md: '92vh' },
                    flex: 2,
                    marginTop: '40px'
                }}>
                <h1 style={{ color: '#fff', marginBottom: 2 }}>{selectedCategory} Videos</h1>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed
