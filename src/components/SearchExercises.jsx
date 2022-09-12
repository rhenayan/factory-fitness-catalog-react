import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData'

import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])


  // fetch categories as soon as page loads only once
  useEffect(() => {
    const fetchExerciseData = async()=> {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }
  
    fetchExerciseData() // call the function as soon as the page loads
  
  }, [])
  

  //HANDLE SEARCH
  const handleSearch = async (e) => {
     
      if(e.key==='Enter' || e.type==='click') {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

        //GET DATA BY SEARCHED EXERCISES
        const searchedExercises = exerciseData.filter(exercise => (exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) || 
          exercise.equipment.toLowerCase().includes(search) || 
          exercise.bodyPart.toLowerCase().includes(search))) 

          console.log(searchedExercises)
    
          setSearch('') //empty text field after sending search query
          setExercises(searchedExercises) // push the result of the query to exercises array
          window.scrollTo({ top: 1400, behavior: 'smooth' })
      }

    
  }
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb={3}
        textAlign='center'
      >
        Awesome Exercise You Should Know
      </Typography>
      <Box position='relative' mb='78px'>
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height='76px'
          value={search}
          onChange={e => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
          onKeyPress ={handleSearch}
        />
        <Button
          className='search-btn'
          sx={{
            backgroundColor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '16px', xs: '12px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{position:'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
