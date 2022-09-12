import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
   
      <Stack direction='row' justifyContent='space-around' sx={{gap: {sm:'122px', xs: '40px'}, pt: {xs: '20px'}, justifyContent:'none'}} px='20px' backgroundColor='#212224'>
        <Link to ='/' ><img src={Logo} alt="Logo" style={{width:'48px', height:'48px', margin:'0 20px'}} /></Link>
        <Stack direction='row' gap='40px' alignItems='center'>
        <Link to ='/'  style={{textDecoration:'none', color: '#fff', borderBottom:'3px solid #ff2625'}} fontSize='35'>Home</Link>
        <a href='#exercises' style={{textDecoration:'none', color: '#fff'}} >Exercises</a>
        </Stack>
    </Stack>
  
    
  )
}

export default Navbar