import { Button } from '@chakra-ui/button';
import { Box, Link, Text } from '@chakra-ui/layout';
import { Link as ReachLink } from 'react-router-dom';
import React from 'react';

// import { Container } from './styles';

const StartPage: React.FC = () => {
  return (
    <Box 
        w="100%"
        h="100vh"
        d="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        background="#ebebeb cover"
    >
        <Box
            d="block"
            background="#F46565"
            w="40rem"
            h="40rem"
            pos="absolute"
            top="0"
            left="0"
            clipPath="polygon(0 0, 100% 0%, 0% 100%, 0% 100%)"
        />
        <Text
            pos="relative"
            bottom="10rem"
            fontFamily="Bungee, cursive"
            fontSize="2.5rem"
        >
            Comece o jogo clicando no botao abaixo 😁
        </Text>
        <Link as={ReachLink} to='/allies'>
            <Button 
                w="15rem"
                h="5rem"
                background="#7E74F0"
                fontSize="2rem"
                transitionDuration="1s all"
                _hover={{
                    transitionDuration: "1s",
                    background: "#F46565"
                }}
            >
                Start Game
            </Button>
        </Link>
        <Box
            d="block"
            background="#7E74F0"
            w="40rem"
            h="40rem"
            pos="absolute"
            bottom="0"
            right="0"
            clipPath="polygon(100% 0, 100% 0%, 100% 100%, 0% 100%)"
        />
    </Box>
  );
}

export default StartPage;