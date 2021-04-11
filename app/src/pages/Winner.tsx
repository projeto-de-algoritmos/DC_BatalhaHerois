import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Link, Text } from '@chakra-ui/layout';
import React, {useEffect, useState} from 'react';
import {useLocation, Link as ReachLink} from 'react-router-dom';
import MergeSort from '../mergesort';

const WAIT = 0;
const LOSE = 1;
const WIN = 2;
const DRAW = 3;

const Winner: React.FC = () => {

  const { state }:any = useLocation();
  const [hero, setHero] = useState<Array<any>>(state['hero']);
  const [enemy, setEnemy] = useState<Array<any>>(state['enemy']);
  const [winner, setWinner] = useState<number>(WAIT);

  useEffect(() => {
    const orderedHero = MergeSort(hero);
    const orderedEnemy = MergeSort(enemy);

    setHero(orderedHero);
    setEnemy(orderedEnemy);
  }, []);

  const compareHero = (index: number, h: number, e:number) => {
    if(hero[index].value < enemy[index].value){
      const myImg: any = document.getElementById('h'+index);
      const enemy: any = document.getElementById('e'+index);
      myImg.style.opacity = "0.2";
      enemy.style.boxShadow = "2px 2px 2px 2px";
      e++;
    }
    else {
      const myImg: any = document.getElementById('e'+index);
      const hero: any = document.getElementById('h'+index);
      myImg.style.opacity = "0.2";
      hero.style.boxShadow = "2px 2px 2px 2px";
      h++;
    }
    if(index === 3){
      console.log(h, e);
      if(h > e){
        setWinner(WIN);
      }
      else if(h < e){
        setWinner(LOSE);
      }
      else {
        setWinner(DRAW);
      }
    }

    if(index < (hero.length-1)){
      setTimeout(compareHero, 3000, index+1, h, e);
    }
  }

  const fight = () => {
    setTimeout(compareHero, 3000, 0, 0, 0);
  }

  return(
    <Box
      d="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100vh"
    >
      <Text
        pos="absolute"
        top="10rem"
        fontFamily="Bungee, cursive"
        fontSize="2rem"
      >
        {winner === WAIT ? "..." : winner === WIN ? "VENCEU" : winner === LOSE ? "PERDEU" : "EMPATOU"}      
      </Text>
      <Box
        pos="absolute"
        left="0"
        top="0"
        w="55%"
        h="100vh"
        background="#7E74F0"
        clipPath="polygon(0% 0, 100% 0%, 80% 100%, 0 100%)"
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        alignItems="center"
        zIndex="-1"
      >
        {hero.map((hero, index) => (
          <Box 
            key={index}
            w="15rem"
            h="20rem"
            margin="2rem"
            d="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Image 
              src={hero.img}
              objectFit="scale-down"
              boxSize="70%"
              id={`h${index}`}
            />
            <Text
              fontFamily="Bungee, cursive"
              fontSize="1.5rem"
            >
              {hero.name}
            </Text>
          </Box>
        ))}
      </Box>
      <Box
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="200px"
        h="200px"
        borderRadius="50%"
        background="#000"
        zIndex="2"
      >
        <Text color="#FFF" fontFamily="Bungee, cursive" fontSize="4rem">VS</Text>
        
        {winner === WAIT ? (
          <Button onClick={() => fight()}>GO</Button>
        ) : (
          <Link as={ReachLink} to="/">
            <Button>HOME</Button>
          </Link>
        )}
        
      </Box>
      <Box
        pos="absolute"
        right="0"
        top="0"
        w="55%"
        h="100vh"
        background="#F46565"
        clipPath="polygon(20% 0, 100% 0%, 100% 100%, 0 100%)"
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-end"
        alignItems="center"
        zIndex="-1"
      >
        {enemy.map((enemy, index) => (
          <Box 
            key={index}
            w="15rem"
            h="20rem"
            margin="2rem"
            d="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Image 
              src={enemy.img}
              objectFit="scale-down"
              boxSize="70%"
              id={`e${index}`}
            />
            <Text
              fontFamily="Bungee, cursive"
              fontSize="1.5rem"
            >
              {enemy.name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Winner;