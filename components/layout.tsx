import { Box } from "@chakra-ui/react";
import { Header } from "components/header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box boxSizing="border-box">
      <Header />
      <main>{children}</main>
    </Box>
  );
};
