import Head from 'next/head';
import Articles from '../components/Articles';
import { getMovies } from '../service/movieService';

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
  const res = await getMovies();

  return {
    props: {
      articles: res.data,
    },
  };
};
