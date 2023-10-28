import React from 'react'
import { categories } from '../utils/constants'
import { Button, Stack } from '@mui/material'


const SideBar = ({selectedCategory, setSelectedCategory}) => {
    return (
        <Stack direction='row'
            sx={{
                overflowX: 'auto',
                pt: 0,
                width: '2000px',
                height: '50px'
            }}
        >
            {categories.map(
                cat => (
                    <Button onClick={()=>{setSelectedCategory(cat.name)}}
                        key={cat.name}
                        className='category-btn'
                        style={{
                            borderRadius: 20,
                            background: cat.name === selectedCategory ? 'red' : 'black',
                            color: 'white',
                            marginLeft: '25px'
                        }}
                    >
                        <span
                            style={{
                                opacity: cat.name === selectedCategory ? 1 : 0.7, marginRight: '10px'
                            }}
                        >
                            {cat.name}
                        </span>
                        <span
                            style={{
                                color: cat.name === selectedCategory ? 'withe' : 'red',
                            }}
                        >
                            {cat.icon}
                        </span>
                    </Button>
                )
            )}
        </Stack>
    )
}

export default SideBar