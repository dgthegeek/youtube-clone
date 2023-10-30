import { Paper, IconButton } from '@mui/material'
import React from 'react'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [searchInput, setsearchInput] = useState('')
    const navigate = useNavigate()
    console.log(searchInput)
    const handleSubmit = (e) => {
        console.log(navigate);
        e.preventDefault();
        e.stopPropagation()
        if (searchInput) {
            console.log('ok');
            navigate(`/search/${searchInput}`)
        }
        setsearchInput('')
    }

    return (
        <Paper onSubmit={handleSubmit} component='form' sx={{ borderRadius: 20, border: '1px solid black', pl: 2, mr: { sm: 5 } }}>
            <input type="text" className='search-bar' placeholder='Search...' value={searchInput}  onChange={(e) => { setsearchInput(e.target.value) }} />
            <IconButton type='submit' sx={{ p: '10px' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar