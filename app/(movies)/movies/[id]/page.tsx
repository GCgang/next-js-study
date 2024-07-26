import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

async function getMovie(id: string) {}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
