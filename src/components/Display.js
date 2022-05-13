import { Card, CardActionArea, CardMedia, Grid } from '@mui/material'
import React from 'react'
import Logo_1 from '../assets/Logo_1.png'
import Logo_2 from '../assets/Logo_2.png'
import Logo_3 from '../assets/Logo_3.png'
import Logo_4 from '../assets/Logo_4.png'
import Logo_5 from '../assets/Logo_5.png'
import Logo_6 from '../assets/Logo_6.png'
import '../App.css';

const Display = ({name, slogan}) => {
  return (
    <div className='logo-container'>
        <Grid container spacing={3} >
            <Grid item xs={4} justifyContent="center">
                <div class="image1">
                    <img src={Logo_1} alt="Logo-1" />
                    <h3 class="image1-text">{name}</h3>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div class="image2">
                    <img src={Logo_2} alt="Logo-2" />
                    <h3 class="image2-text">{name}</h3>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div class="image3">
                    <img src={Logo_3} alt="Logo-3" />
                    <h3 class="image3-text">{name}</h3>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div class="image4">
                    <img src={Logo_4} alt="Logo-4" />
                    <h3 class="image4-text">{name}</h3>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div class="image5">
                    <img src={Logo_5} alt="Logo-5" />
                    <h3 class="image5-text">{name}</h3>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div class="image6">
                    <img src={Logo_6} alt="Logo-6" />
                    <h3 class="image6-text">{name}</h3>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Display