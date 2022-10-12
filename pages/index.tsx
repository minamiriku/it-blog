import type { NextPage } from "next";
import { client } from "libs/client";
import { HeadInfo } from "components/head";
import { CardList } from "components/core";

type Props = {
  blogs: ITBlog.Blog[];
};
const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <>
      <HeadInfo />
      <CardList blogs={blogs} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const blogs = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: blogs.contents,
    },
  };
};
