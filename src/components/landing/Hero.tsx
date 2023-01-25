import { Box, Container, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Background from "/static/img/hero.png"
const Hero = () => {
  return (
    <Box as="section" style={{
      backgroundImage:`url(${Background})`,
      backgroundSize:"40%",
      backgroundPosition:"center",
    }}
    bg="base.dark" pos="relative" overflow="hidden"  
    >
      <Container
        as={VStack}
        py={36}
        maxW="container.md"
        spacing={10}
        zIndex={1}
        pos="relative"
      >
        <h1 style={{
          color: "white",
          textAlign: "center",
        }}>
          Хялбар дөхөм блокчэйн хэрэглээ.
        </h1>

        <Text textAlign="center" fontSize="2xl" color="white">
          Октагон экосистемийн гарын авлага заавар.
        </Text>
      </Container>
    </Box>
  );
};

export default Hero;
