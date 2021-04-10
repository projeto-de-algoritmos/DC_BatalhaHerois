import { Box, Text } from '@chakra-ui/layout';
import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import MergeSort from '../mergesort';

const Winner: React.FC = () => {

  const { state }:any = useLocation();
  const [hero, setHero] = useState<Array<any>>(state['hero']);
  const [enemy, setEnemy] = useState<Array<any>>(state['enemy']);

  useEffect(() => {
    const orderedHero = MergeSort(hero);
    const orderedEnemy = MergeSort(enemy);

    setHero(orderedHero);
    setEnemy(orderedEnemy);
  }, []);

  return(
    <Box
      d="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100vh"
    >
      <Box
        pos="absolute"
        left="0"
        top="0"
        w="55%"
        h="100vh"
        background="#7E74F0"
        clipPath="polygon(0% 0, 100% 0%, 80% 100%, 0 100%)"
      ></Box>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="center"
        w="200px"
        h="200px"
        borderRadius="50%"
        background="#000"
        zIndex="10"
      >
        <Text color="#FFF" fontFamily="Bungee, cursive" fontSize="4rem">VS</Text>
      </Box>
      <Box
        pos="absolute"
        right="0"
        top="0"
        w="55%"
        h="100vh"
        background="#F46565"
        clipPath="polygon(20% 0, 100% 0%, 100% 100%, 0 100%)"
      ></Box>
    </Box>
  );
}

export default Winner;