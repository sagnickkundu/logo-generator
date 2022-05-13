import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Form = ({getData}) => {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [slogan, setSlogan] = useState('');
    let setDisable;
    if(name === ''){
        setDisable = true;
    }
    else{
        setDisable = false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(name, slogan);
        navigate('/display');
    }
  return (
    <div>
        <div className='heading-container'>
            <Typography sx={{margin: "10px auto", color: "rgb(19,22,35)", letterSpacing: "-0.7px"}} variant='h4' gutterBottom>Enter your company name</Typography>
            <Typography sx={{margin: "0", color: "rgb(105,108,134);", letterSpacing: "0.2px"}} variant='h6' gutterBottom>You can always change these later</Typography>
            <div className='button-container'>
                <Button variant='contained' type='submit' form='my-form' disabled={setDisable} >Continue &#x2192;</Button>
            </div>
        </div>
        <div className='form-container'>
            <form id='my-form' onSubmit={handleSubmit}>
                <TextField InputProps={{ disableUnderline: true}} sx={{ marginRight: "10px"}} label="Company Name" variant='filled' value={name} onChange={e => setName(e.target.value)} />
                <TextField InputProps={{ disableUnderline: true}} label="Add a Slogan (Optional)" variant='filled' value={slogan} onChange={e => setSlogan(e.target.value)} />
            </form>
        </div>
    </div>
    
  )
}

export default Form