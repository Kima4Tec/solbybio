import { Director } from './director.model';

export interface Movie {
  id: string;
  title: string;
  durationMinutes: number;
  ageLimit: number;
  description?: string;

  //instruktører til visning
  directors?: Director[];
}
