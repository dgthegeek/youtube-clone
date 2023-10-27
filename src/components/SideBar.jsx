import React from 'react'
import { categories } from '../utils/constants'
import { Button, Stack } from '@mui/material'


const SideBar = ({selectedCategory, setSelectedCategory}) => {
    return (
        <Stack direction='row'
            sx={{
                overflowY: 'auto',
                pt: 5, height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
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
                            marginTop: '5px'
                        }}
                    >
                        <span
                            style={{
                                opacity: cat.name === selectedCategory ? 1 : 0.7
                            }}
                        >
                            {cat.name}
                        </span>
                        <span
                            style={{
                                color: cat.name === selectedCategory ? 'withe' : 'red',
                                marginLeft: '15px'
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