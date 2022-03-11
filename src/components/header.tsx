import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isAtLeast1200] = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      as="header"
      bg="#292929"
      py={{
        base: "17px",
        md: "38px",
      }}>
      <Flex align="center" justify={isAtLeast1200 ? "space-between" : "center"} px="77px">
        <Heading as="h1" size="md">
          <Text as={Link} to="/" fontWeight="semibold" color="#fff" border="1px solid #fff" p={2}>
            Movie Search
          </Text>
        </Heading>
      </Flex>
    </Box>
  );
}
