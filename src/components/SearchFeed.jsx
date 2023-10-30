import React from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { useState, useEffect } from "react";
import { FetchData } from "../utils/API";
import { Box } from "@mui/material";

const SearchFeed = () => {
    const [videos, setvideos] = useState([])
    const { searchInput } = useParams()

    useEffect(
        () => {
            FetchData(`search?part=snippet&q=${searchInput}`)
                .then((data) => setvideos(data))
        }, [searchInput]
    )

    return (
        <Box
            sx={{
                ml: '40px',
                msOverflowY: 'auto',
                height: { sx: 'auto', md: '92vh' },
                marginTop: '5px',
                overflowY: 'scroll'
            }}>
            <h1 style={{ color: '#fff', marginBottom: 2 }}>{searchInput} Videos</h1>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed