import useSWR from "swr";
import {
  Box,
  Link,
  ListItem,
  Spinner,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const fetcher = async (endpoint: string) => {
  const data = await fetch(endpoint);
  const categories = await data.json();
  return categories.contents;
};

export const Sidebar = () => {
  const { data, error } = useSWR("/api/categories", fetcher);

  if (error) return <Box>failed to load</Box>;
  if (!data) return <Spinner />;

  return (
    <UnorderedList position="sticky" top={108} styleType="none">
      <VStack spacing={3} align="flex-start">
        {data?.map((category: ITBlog.Category) => (
          <ListItem key={category.id}>
            <NextLink href={`/category/${category.id}`}>
              <Link>{category.name}</Link>
            </NextLink>
          </ListItem>
        ))}
      </VStack>
    </UnorderedList>
  );
};
