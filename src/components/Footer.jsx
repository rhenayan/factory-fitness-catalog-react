import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => {
  return (
    <Box mt='50px' py='50px' bgColor='#ff3f4' backgroundColor='#1e1f1e'>
    <Stack alignItems='center' > 
    <Typography
        variant='h6'
        fontWeight='800'
        color='#e33030'
        mb='5px'
      >
        Factory Fitness 💪
      </Typography>
      <Typography color='#fff' variant="caption" > Copyright 2022 </Typography>
    
    </Stack>
    </Box>
  );
};

export default Footer;
