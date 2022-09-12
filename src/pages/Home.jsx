import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { Box } from '@mui/material';


const Home = () => {


  const [exercises, setExercises] = useState([]); // holds the exercise data (searced)
  const [bodyPart, setBodyPart] = useState('all');
  return (
  
      <Box>
        <HeroBanner />
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          exercises={exercises}
        />
      </Box>
   
  );
};

export default Home;
