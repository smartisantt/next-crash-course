import Link from 'next/link';
import { useRouter } from 'next/router';
import { getMovie } from '../../service/movieService';

const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <div>
      <h1>{article?.name}</h1>
      <p>{article?.intro}</p>
      <br />
      <Link href='/'>Go back</Link>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await getMovie(id);

  return {
    props: {
      article: res.data,
    },
  };
};

export default Article;
