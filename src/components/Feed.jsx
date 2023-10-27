import { Box, Stack } from "@mui/material";
import React from "react";
import SideBar from "./SideBar";

const Feed = () => {
    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            <Box
                sx={{
                    height: { sx: 'auto', md: '92vh' },
                    borderRight: '1px solid red',
                    px: { sx: 0, md: 2 }
                }}
            >
                <SideBar>

                </SideBar>
                <p>Copyrights dgthegeek 2023</p>
            </Box>
            <Box
                sx={{
                    ml: '40px'
                }}>

                <h1 style={{ color: '#fff', marginBottom: 2}}>Category Videos</h1>

            </Box>
        </Stack>
    )
}

export default Feed