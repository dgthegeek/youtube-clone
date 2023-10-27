import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const NavBar = () => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            p={2}
            sx={{ position: 'sticky', background: 'red', top: 0, justifyContent: 'space-between' }}
        >
            <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="my-logo" height={45}/>
            </Link>
            <SearchBar />

        </Stack>
    )
}

export default NavBar