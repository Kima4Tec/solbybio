export interface CreateMovieDto {
  title: string;
  durationMinutes: number;
  ageLimit: number;
  description?: string;
  directorIds: string[];
}