import React from 'react'
import {Box, Typography, Stack} from '@mui/material'

const ExerciseVideos = ({exerciseVideos, exerciseName}) => {


  return (
    <Box sx={{marginTop: {lg: '100px', xs: '20px'}}} p='20px'>

      <Typography variant='h4' mb='33px'>
          Watch exercise <span style={{textTransform:'capitalize', fontWeight:'bold', color: '#ff2625'}}>{exerciseName} </span>videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{
        flexDirection: {lg: 'row'},
        gap: '50px'
      }}>

        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a 
          key={index}
          className='exercise-video'
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank'
          rel='noreferrer'>
            <img src={item.video.thumbnails[0].url} alt={item.video.title} height='230px' objectFit='cover'/>
            <Box>
              <Typography variant='h6' color='#000'>
                {item.video.title}
              </Typography>

              <Typography variant='subtitle' color='#000'>
                {item.video.channelName}
              </Typography>
            </Box>

          </a>
          
        ))}
      </Stack>
  

    </Box>
  )
}

export default ExerciseVideos