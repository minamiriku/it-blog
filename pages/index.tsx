import type { NextPage } from "next";
import Link from "next/link";
import { client } from "libs/client";

const Home: NextPage<{ blogs: any }> = ({ blogs }) => {
  return (
    <div>
      <ul>
        {blogs.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
