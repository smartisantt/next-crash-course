import Head from 'next/head';
import Articles from '../components/Articles';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev</title>
        <meta name='keyword' content='ssr' />
      </Head>
      <Articles articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`http://yuanjin.tech:5100/api/movie`);
  const articles = await res.json();

  if (!articles) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles,
    },
  };
};
