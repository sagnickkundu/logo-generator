import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar position='static' sx={{ textAlign: "center" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo Generator
          </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header