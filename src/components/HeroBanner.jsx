import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';


const HeroBanner = () => {
  return (
    <Box className='hero-banner'>
      <Stack
        direction='column'
        alignItems='flex-start'
        pt='150px'
        sx={{ pl: { xs: '30px', sm: '100px' } }}
      >
        <Typography
          sx={{ color: '#ff2625', fontWeight: '600', fontSize: '26px' }}
        >
          Factory Fitness
        </Typography>
        <Typography
          sx={{
            fontWeight: '800',
            fontSize: { lg: '44px', xs: '40px' },
            mb: '23px',
            mt: '30px',
            textTransform: 'uppercase',
            color: '#fff',
          }}
        >
          build your <br /> core strength{' '}
        </Typography>
        <Typography
          sx={{ fontSize: '21px', lineHeight: '35px', mb: 3, color: '#fff' }}
        >
          Check out the most effective exercises{' '}
        </Typography>

        <Button
          variant='contained'
          color='error'
          href='#exercises'
          sx={{ backgroundColor: '#ff2625', padding: '10px', letterSpacing: 2 }}
        >
          Explore Exercises
        </Button>
      </Stack>
    </Box>
  );
};

export default HeroBanner;
