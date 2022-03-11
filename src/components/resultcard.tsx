import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ResultCard({ result }: { result: Result }) {
  return (
    <Box
      to={`/result/${result.imdbID}`}
      state={result}
      as={Link}
      height={{
        base: "200px",
        md: "300px",
      }}
      flexShrink={0}
      width={{
        base: "200px",
        md: "300px",
      }}
      background={`url(${result.Poster}) center/cover no-repeat`}>
      <Flex
        width="100%"
        height="100%"
        justify="center"
        align="center"
        _hover={{
          background: "rgba(0,0,0,0.6)",
        }}
        p={4}
        textAlign="center"
        backgroundColor="rgba(0,0,0,0.5)">
        <Text textColor="white">{result.Title}</Text>
      </Flex>
    </Box>
  );
}

export default ResultCard;
