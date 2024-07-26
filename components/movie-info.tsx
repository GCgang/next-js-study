import { API_URL } from '../app/(home)/page';

async function getInfo(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  throw new Error('Erorr handling');

  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getInfo(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
