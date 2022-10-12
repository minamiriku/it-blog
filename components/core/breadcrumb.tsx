import { useRouter } from "next/router";
import useSWR from "swr";
import { MdChevronRight } from "react-icons/md";
import {
  Box,
  Spinner,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "components/core/link";

export const fetcher = async (endpoint: string) => {
  const data = await fetch(endpoint);
  const categories = await data.json();
  return categories.contents;
};

const ROOT_PATH = "/";

export const BreadCrumb = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const { id } = query;

  const { data, error } = useSWR("/api/categories", fetcher);

  if (pathname === ROOT_PATH) return null;
  if (error) return <Box>failed to load</Box>;
  if (!data) return <Spinner />;

  const category: ITBlog.Category = data?.find(
    (item: ITBlog.Category) => item.id === id
  );
  return (
    <Breadcrumb spacing="8px" separator={<MdChevronRight color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          href="/"
          _hover={{ textDecoration: "underline" }}
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">{category.name}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
