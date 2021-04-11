import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Link, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Link as ReachLink } from 'react-router-dom';

import capitao_america from '../assets/allies/Capitao-america.png'
import capitao_caverna from '../assets/allies/capitao-caverna.png'
import goku from '../assets/allies/Goku.png'
import homem_aranha from '../assets/allies/Homem-aranha.png'
import hulk from '../assets/allies/hulk.png'
import ichigo from '../assets/allies/Ichigo.png'
import link from '../assets/allies/Link.png'
import luffy from '../assets/allies/Luffy.png'
import mario from '../assets/allies/Mario.png'
import pikachu from '../assets/allies/Pikachu.png'

const SelectAllies: React.FC = () => {
  const [hero, setHero] = useState<Array<any>>([]);
  const [board, setBoard] = useState<Array<any>>([
    {
      name: "Capitão América",
      img: capitao_america,
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Capitão Caverna",
      img: capitao_caverna,
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Goku",
      img: goku,
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Homem-Aranha",
      img: homem_aranha,
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Hulk",
      img: hulk,
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Ichigo",
      img: ichigo,
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Link",
      img: link,
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Luffy",
      img: luffy,
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Mario",
      img: mario,
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Pikachu",
      img: pikachu,
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    }
  ]); 

  const onSelect = (idx: number) => {
    const heros = [...board];
    var candidate = [...hero];

    if(heros[idx].select === false){
      heros[idx].select = true;
      candidate.push(heros[idx]);
    }
    else if(heros[idx].select === true){
      heros[idx].select = false;
      for(var i = 0; i < candidate.length; i++){
        if(candidate[i].value === heros[idx].value){
          candidate.splice(i, 1);
        }
      }
    }
    setHero(candidate);
    setBoard(heros);
  }

  useEffect(() => {
    if(hero.length === 4){
      var area: any = document.getElementById('selectionArea');
      area.addEventListener('click', (e: any) => {
        e.stopPropagation();
        e.preventDefault();
      }, true);
    }
  }, [hero])
  return(
      <Box
        w="100%"
        h="100vh"
        d="flex"
        flexDirection="column"
        background="#ebebeb cover"
        alignItems="center"
      >

          <Text
            fontSize="3rem"
            fontFamily="Bungee, cursive"
          >
            HERO BATTLE
          </Text>
          <Link as={ReachLink} to={{pathname: '/enemies', state: hero}}>
            <Button 
              pos="fixed" 
              top="50%" 
              right="2rem" 
              w="12rem" 
              h="4rem"
              background="#F46565"
              _hover={{
                background: "#d45656"
              }}
              isDisabled={hero.length === 4 ? false : true}
            >
              Proximo
            </Button>
          </Link>
          <Text
            fontSize="2rem"
            fontFamily="Bungee, cursive"
            marginTop="15px"
          >
            Selecione os 4 heróis que serão seus aliados abaixo:
          </Text>
          <Text>Pense bem, assim que selecionar 4 heróis o desafio será confirmado e você não poderá alterar!!</Text>
          <Box
            w="80%"
            d="grid"
            gridTemplateColumns="repeat(4, 1fr)"
            gridRowGap="20px"
            marginTop="30px"
            id="selectionArea"
          >
            {board.map((item, index) => (
              <Box 
                w="17rem"
                h="22.5rem"
                background="#7E74F0"
                justifySelf="center"
                d="flex"
                flexDirection="column"
                justifyContent="space-around"
                alignItems="center"
                key={index}
                onClick={() => onSelect(index)}
              >
                <Image 
                  src={item.img}
                  objectFit="scale-down"
                  boxSize="80%"
                />
                <Text
                  fontFamily="Bungee, cursive"
                  fontSize="1.5rem"
                >
                  {item.name}
                </Text>
                {item.select ? (
                  <Box w="17.5rem" h="23rem" background="#000" pos="absolute" zIndex="-1">
                  </Box>
                ): null}
              </Box>
            ))}
          </Box>
      </Box>
  );
}

export default SelectAllies;