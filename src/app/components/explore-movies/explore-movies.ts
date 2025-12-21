import { Component, signal } from '@angular/core';
import { MoviesList } from '../movies-list/movies-list';

@Component({
  selector: 'app-explore-movies',
  imports: [MoviesList],
  templateUrl: './explore-movies.html',
  styleUrl: './explore-movies.css',
})
export class ExploreMovies {
  movies = signal([{}]);

  adicionarFilme() {}
}
