import Head from "next/head";

const defaultHead = {
  title: "RickのITブログ",
  meta: {
    name: "description",
    content: "RickのITに関する知識を共有するブログです",
  },
};

export const HeadInfo = ({
  title,
  meta,
}: {
  title?: string;
  meta?: { name: string; content: string }[];
}) => {
  console.log(title);
  return (
    <Head>
      <title>{`${defaultHead.title}${title ? ` - ${title}` : ""}`}</title>
      {meta?.map((item, index) => (
        <meta key={index} name={item.name} content={item.content} />
      )) ?? (
        <meta name={defaultHead.meta.name} content={defaultHead.meta.content} />
      )}
    </Head>
  );
};
