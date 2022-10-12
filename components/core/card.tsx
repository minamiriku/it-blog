import { Heading, Image, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from "components/core/link";

type Props = {
  blogs: ITBlog.Blog[];
};

const Card = ({ title, src, ...rest }: { title: string; src: string }) => {
  return (
    <VStack spacing={5} p={5} shadow="md" borderWidth="1px" {...rest}>
      <Image src={src} alt={title} />
      <Heading fontSize="xl">{title}</Heading>
    </VStack>
  );
};

export const CardList = ({ blogs }: Props) => {
  return (
    <Wrap>
      {blogs.map((blog) => (
        <WrapItem key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <Card title={blog.title} src={blog.eyecatch.url} />
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  );
};
