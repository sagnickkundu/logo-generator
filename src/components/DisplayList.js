import React, { useState, useEffect } from 'react'
import { CircularProgress, Typography } from '@mui/material';
import Display from './Display';


const DisplayList = ({name, slogan}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), 1000);
  
    return () => {
      clearTimeout(timer1);
    };
  }, []); 
  
  return show ? (
    <div className='options'>
      <Display name={name} slogan={slogan} />
    </div>
  ) : (
    <div className='loading'>
        <CircularProgress />
        <Typography variant='h6'>Generating Logos for You</Typography>
    </div>
  )
}

export default DisplayList