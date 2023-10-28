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
        <Stack sx={{ flexDirection: 'column', marginTop: '0px'}}>
            <Box
                sx={{
                    flexDirection :'row',
                    overflowX: 'auto',
                    borderBottom: '1px solid red',
                    marginTop: '10px'
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
                    height: { sx: 'auto', md: '92vh' },
                    marginTop: '5px'
                }}>
                <h1 style={{ color: '#fff', marginBottom: 2 }}>{selectedCategory} Videos</h1>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed
