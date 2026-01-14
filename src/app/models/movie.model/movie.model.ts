import { Director } from '../director.model/director.model';

export interface Movie {
  id: string;
  title: string;
  durationMinutes: number;
  ageLimit: number;
  description?: string;

  //instruktører til visning
  directors?: Director[];

  // Dette er til multi-select og POST/PUT
  directorIds?: string[];
}
