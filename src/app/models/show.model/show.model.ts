import { Movie } from '../movie.model/movie.model';

export interface Show {
  id: string;
  movieId: string;
  startTime: string;
  price: number;

  movie?: Movie;
}
