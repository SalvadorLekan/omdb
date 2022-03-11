import React from "react";
import { Text, Container, Input } from "@chakra-ui/react";
import { useOutletContext } from "react-router-dom";

function SearchInput() {
  const [search, setSearch] = useOutletContext<RouteContext>();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Container
        maxW="container.2xl"
        pt={{
          base: "49px",
          md: "63px",
        }}>
        <Text as="label" htmlFor="search" marginBottom="4">
          Search
        </Text>
        <Input id="search" placeholder="Search..." value={search} onChange={handleSearch} />
        <Text fontSize="sm" color="gray.500">
          input at least three characters to search
        </Text>
      </Container>
    </>
  );
}

export default SearchInput;
