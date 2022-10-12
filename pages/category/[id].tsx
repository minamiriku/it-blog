import { GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { client } from "libs/client";
import { Box, VStack } from "@chakra-ui/react";
import { HeadInfo, joinDefaultHeadTitle } from "components/head";
import { CardList } from "components/core";
import { BreadCrumb } from "components/core/breadcrumb";

type Props = {
  blogs: ITBlog.Blog[];
  categories: ITBlog.Category[];
};

const CategoryId: NextPage<Props> = ({ blogs, categories }) => {
  const router = useRouter();
  const { id } = router.query;

  if (blogs.length === 0) {
    return <Box>ブログコンテンツがありません</Box>;
  }

  return (
    <>
      <HeadInfo
        title={joinDefaultHeadTitle(
          categories.find((category) => category.id === id)?.name
        )}
      />
      <CardList blogs={blogs} />
    </>
  );
};

export default CategoryId;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map(
    (content: ITBlog.Category) => `/category/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const data = await client.get({
    endpoint: "blogs",
    queries: { filters: `category[equals]${context.params?.id}` },
  });
  const categoriesData = await client.get({ endpoint: "categories" });
  const categories = categoriesData.contents;
  return {
    props: {
      blogs: data.contents,
      categories,
    },
  };
};
