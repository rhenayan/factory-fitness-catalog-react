import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const moreDetail = [{
    icon: BodyPartImage,
    name: bodyPart
  }, 
  {
    icon: TargetImage,
    name: target
  },
  {
    icon: EquipmentImage,
    name: equipment
  }]

  return (
    <Stack
      gap='60px'
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center'}}
      width='90%'
      m='auto'
      mt='100px'
    
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack>
        <Typography variant='h3' fontWeight='bold' mb='35px' textTransform='capitalize' sx={{fontSize: {xs:'40px', lg: '50px'}}}>{name}</Typography>
        <Typography variant='h6'  mb='35px'>Exercises keep you strong. 
         {''} <span style={{fontWeight: 'bold', textTransform:'capitalize'}}>{name}</span> is one of the best exercises to target your  {''} <span style={{fontWeight: 'bold'}}>{target}</span> . 
          It will help you improve your mood and gain energy.
        </Typography>
        {moreDetail.map((detail, index)=> (
      
          <Stack key={index} direction='row' gap='24px' alignItems='center'>
            <Button sx={{background: '#ff2db', borderRadius:'50%', width: '100px', height: '100px'}}> 
              <img src={detail.icon} alt={detail.name} style={{width: '50px', height: '50px'}}/>
            </Button>
            <Typography variant='h6' textTransform='capitalize'>{detail.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
