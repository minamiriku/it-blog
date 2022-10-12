import { GetStaticPropsContext, NextPage } from "next";
import { Box, Flex, Heading, Image, Tag } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { HeadInfo } from "components/head";
import { IconText } from "components/icon";
import { client } from "libs/client";
import { formatDate } from "utils/format";
import { ICONS } from "utils/icons";

const BlogId: NextPage<{ blog: ITBlog.Blog }> = ({ blog }) => {
  return (
    <>
      <HeadInfo title={blog.title} />
      <Image src={blog.eyecatch.url} alt={blog.title} />
      <Heading as="h1" mt={5}>
        {blog.title}
      </Heading>
      <Flex mt={5} justifyContent="space-between">
        <Tag size="md" variant="solid" colorScheme="gray">
          {blog.category?.name}
        </Tag>
        <Flex alignItems="end" flexDirection="column">
          <IconText icon={ICONS.TIME}>{formatDate(blog.publishedAt)}</IconText>
          <IconText icon={ICONS.UPDATED}>{formatDate(blog.updatedAt)}</IconText>
        </Flex>
      </Flex>
      <Container
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </>
  );
};

export default BlogId;

const Container = styled(Box)`
  & > h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    padding: 10px 20px;
    border-radius: 5px;
  }

  & > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }

  & > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  & > ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
`;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map(
    (content: ITBlog.Blog) => `/blog/${content.id}`
  );

  return { paths, fallback: false };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const data = await client.get({
    endpoint: "blogs",
    contentId: context.params?.id,
  });

  return {
    props: {
      blog: data,
    },
  };
};
