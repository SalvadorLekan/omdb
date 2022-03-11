import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container
      maxW="container.2xl"
      mx="auto"
      px={4}
      py={4}
      sx={{
        backgroundImage: `url("/assets/crowd.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <Heading
        as="h2"
        padding={{
          base: "md",
          lg: "77px",
        }}
        py="32"
        fontSize={{
          base: "28px",
          md: "72px",
        }}
        textAlign={{
          base: "center",
          lg: "left",
        }}>
        <Text
          textColor="#fff"
          maxWidth={{
            base: "100%",
            md: "490px",
          }}>
          Watch something incredible.
        </Text>
      </Heading>
    </Container>
  );
}
