import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Container, Flex, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";

function ResultDetails() {
  const { state } = useLocation();
  const { i } = useParams();
  const [details, setDetails] = useState(() => state as MoreResult | undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("", {
        params: {
          i,
        },
      })
      .then((res) => {
        if (res.data.Response === "True") {
          setDetails(res.data);
        } else {
          setDetails(undefined);
        }
      })
      .catch(() => {
        setDetails(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [i]);
  if (isLoading) {
    return (
      <div>
        <Box height="500px" width="100%" background={`url(${details?.Poster}) center/cover no-repeat`}>
          {!details?.Poster && <Skeleton height="100%" />}
          {!!details?.Title && (
            <Flex p={16} height="100%" width="100%" background="rgba(0,0,0,0.5)" alignItems="center">
              <Heading as="h2" size="xl" textAlign="center" color="white">
                {details?.Title}
              </Heading>
            </Flex>
          )}
        </Box>
        <Container maxW="container.2xl">
          <Skeleton mt={16} mb={16} height="64" />
          <Skeleton mt={16} mb={16} height="64" />
          <Skeleton mt={16} mb={16} height="64" />
          <Skeleton mt={16} mb={16} height="64" />
        </Container>
      </div>
    );
  }
  if (!details) {
    return <Text>No results found</Text>;
  }
  return (
    <div>
      <Box height="500px" width="100%" background={`url(${details.Poster}) center/cover no-repeat`}>
        <Flex p={16} height="100%" width="100%" background="rgba(0,0,0,0.5)" alignItems="center">
          <Heading as="h2" size="xl" color="white">
            {details?.Title}
          </Heading>
        </Flex>
      </Box>
      <Container maxW="container.2xl" p={16}>
        <Stack>
          <Heading as="h3">
            <Text>Year:</Text>
          </Heading>
          <Text>{details?.Year}</Text>

          <Heading as="h3">
            <Text>Plot:</Text>
          </Heading>
          <Text>{details?.Plot}</Text>

          <Heading as="h3">
            <Text>Awards:</Text>
          </Heading>
          <Text>{details?.Awards}</Text>

          <Heading as="h3">
            <Text>Actors:</Text>
          </Heading>
          <Text>{details?.Actors}</Text>

          <Heading as="h3">
            <Text>Ratings:</Text>
          </Heading>
          {details.Ratings.map((rating) => (
            <Text>
              {rating.Source}: {rating.Value}
            </Text>
          ))}
          {!details.Ratings.length && <Text>No ratings found</Text>}
        </Stack>
      </Container>
    </div>
  );
}

export default ResultDetails;
