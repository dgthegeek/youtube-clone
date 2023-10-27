import { Paper, IconButton } from '@mui/material'
import React from 'react'
import { Search } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    return (
        <Paper component='form'
            sx={{ borderRadius: 20, border: '1px solid black', pl: 2, mr: { sm: 5 } }}>
            <input type="text" className='search-bar' placeholder='Search...' value='' onSubmit={() => { }} />
            <IconButton type='submit' sx={{ p: '10px' }}>
                <Search />
            </IconButton>

        </Paper>
    )
}

export default SearchBar