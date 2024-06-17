import axios from 'axios';
import ComicDetailClient from './ComicDetailClient';

const ComicDetailPage = async ({ params }) => {
  const { id } = params;
  const res = await axios.get(`http://localhost:1337/api/comics/${id}`);
  const comic = res.data.data.attributes;

  return <ComicDetailClient comic={comic} />;
};

export async function generateStaticParams() {
  const res = await axios.get('http://localhost:1337/api/comics');
  const comics = res.data.data;

  return comics.map((comic) => ({
    id: comic.id.toString(),
  }));
}

export default ComicDetailPage;
