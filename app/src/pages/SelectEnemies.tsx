import React, { useState } from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Link, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Link as ReachLink } from 'react-router-dom';

const SelectEnemies: React.FC = () => {
  const [a, setA] = useState<Array<any>>([
    {
      name: "Joao",
      img: "aaaa",
      select: true,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Joao",
      img: "aaaa",
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Joao",
      img: "aaaa",
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Joao",
      img: "aaaa",
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Joao",
      img: "aaaa",
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Joao",
      img: "aaaa",
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Joao",
      img: "aaaa",
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Joao",
      img: "aaaa",
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Joao",
      img: "aaaa",
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    },
    {
      name: "Joao",
      img: "aaaa",
      select: false,
      value: Math.floor(Math.random() * (1000 - 1)) + 1
    }
  ]); 

  const onSelect = (idx: number) => {
    console.log(a[idx]);
    const heros = [...a];
    heros[idx].select = !heros[idx].select;
    setA(heros);
  }
  return (
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
          <Link as={ReachLink} to='/enemies'>
            <Button 
              pos="fixed" 
              top="50%" 
              right="2rem" 
              w="12rem" 
              h="4rem"
              background="#8CF583"
              _hover={{
                background: "#7ad472"
              }}
            >
              Proximo
            </Button>
          </Link>
          <Text
            fontSize="2rem"
            fontFamily="Bungee, cursive"
            marginTop="15px"
          >
            Selecione os heróis que serão seus inimigos abaixo:
          </Text>
          <Box
            w="80%"
            d="grid"
            gridTemplateColumns="repeat(4, 1fr)"
            gridRowGap="20px"
            marginTop="30px"
          >
            {a.map((item, index) => (
              <Box 
                w="17rem"
                h="22.5rem"
                background="#F46565"
                justifySelf="center"
                d="flex"
                flexDirection="column"
                justifyContent="space-around"
                alignItems="center"
                key={index}
                onClick={() => onSelect(index)}
              >
                <Image 
                  src="https://images.vexels.com/media/users/3/205366/isolated/preview/71aa0762ebc5f9322bf08590751d06ae-menino-feliz-estudante-personagem-by-vexels.png"
                  objectFit="cover"
                  boxSize="70%"
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

export default SelectEnemies;