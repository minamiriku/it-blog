import { Box, Flex, VStack } from "@chakra-ui/react";
import { BreadCrumb } from "components/core/breadcrumb";
import { Header } from "components/header";
import { Sidebar } from "components/sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box boxSizing="border-box">
      <Header />
      <Flex as="main" justifyContent="space-between" mx="auto" my={0} p={6}>
        <Box w={192}>
          <Sidebar />
        </Box>
        <VStack w={645} spacing={5} align="flex-start">
          <BreadCrumb />
          {children}
        </VStack>
        <Box w={232} />
      </Flex>
    </Box>
  );
};
