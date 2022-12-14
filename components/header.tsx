import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex as="header" p={6} position="sticky" top={0} backgroundColor="white">
      <Link href="/">
        <Box
          fontSize={24}
          fontWeight="bold"
          color="primary.500"
          cursor="pointer"
        >
          RICK BLOG
        </Box>
      </Link>
    </Flex>
  );
};
