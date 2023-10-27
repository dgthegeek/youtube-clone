import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { FetchData } from "../utils/API";
import { useState } from "react";



const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New')
    
    useEffect(
        () => {
            FetchData(`search?part=snippet&q=${selectedCategory}`)
        }, [selectedCategory]
    )
    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row', overflowY: 'auto', marginTop: '20px' } }}>
            <Box
                sx={{
                    height: { sx: 'auto', md: '92vh' },
                    borderRight: '1px solid red',
                    px: { sx: 0, md: 2 }
                }}
            >
                <SideBar
                selectedCategory= {selectedCategory}
                setSelectedCategory= {setSelectedCategory}

                />
                <p>Copyrights dgthegeek 2023</p>
            </Box>
            <Box
                sx={{
                    ml: '40px',
                    msOverflowY: 'auto',
                    marginTop: '20px',
                    height: { sx: 'auto', md: '92vh' },
                    flex: 2
                }}>
                <h1 style={{ color: '#fff', marginBottom: 2 }}>Category Videos</h1>
                <Videos videos={[]} />
            </Box>
        </Stack>
    )
}

export default Feed
