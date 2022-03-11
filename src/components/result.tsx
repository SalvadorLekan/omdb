import React from "react";
import { Container, Heading, Text, Stack, Skeleton } from "@chakra-ui/react";
import ResultCard from "./resultcard";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import debounce from "lodash.debounce";
interface ResultProps {
  type: string;
}

function Result({ type }: ResultProps) {
  const [search] = useOutletContext<RouteContext>();
  const [results, setResults] = React.useState<Result[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [ended, setEnded] = React.useState(false);
  React.useEffect(() => {
    if (search.length > 2) {
      setLoading(true);
      axios
        .get("", {
          params: {
            s: search,
            type,
            page,
          },
        })
        .then((res) => {
          if (res.data.Response === "True") {
            setResults((result) => [...result, ...res.data.Search]);
          } else {
            setEnded(true);
          }
        })
        .catch((err) => {
          setEnded(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [search, type, page]);

  const handleScroll = debounce(
    (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
      if (scrollLeft + clientWidth >= scrollWidth * 0.9 && !loading && !ended) {
        setPage((page) => page + 1);
      }
    },
    30,
    {
      leading: true,
      trailing: true,
      maxWait: 60,
    }
  );

  React.useEffect(() => {
    if (search.length > 2) {
      setPage(1);
      setResults([]);
      setEnded(false);
    }
  }, [search]);

  return (
    <Container maxW="container.2xl" marginBottom="48px">
      <Heading as="h3" fontSize="24px">
        <Text border="1px solid #fff" p={2} textTransform="capitalize">
          {type}
        </Text>
      </Heading>
      <Stack onScroll={handleScroll} direction="row" overflow="auto" spacing={"13px"}>
        {results.map((result) => (
          <ResultCard key={result.imdbID} result={result} />
        ))}
        {loading &&
          [1, 2, 3].map((i) => (
            <Skeleton
              flexShrink={0}
              key={i}
              height={{
                base: "200px",
                md: "300px",
              }}
              width={{
                base: "200px",
                md: "300px",
              }}
            />
          ))}
        {!loading && !results.length && <Text>No results found</Text>}
      </Stack>
    </Container>
  );
}

export default Result;
