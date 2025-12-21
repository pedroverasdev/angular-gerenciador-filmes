import { Component, signal, WritableSignal } from '@angular/core';
import { Header } from './components/header/header';
import { ExploreMovies } from './components/explore-movies/explore-movies';
import { CreateMovie } from './components/create-movie/create-movie';
import { FavoriteMovies } from './components/favorite-movies/favorite-movies';
import { MovieDetails } from './components/movie-details/movie-details';

@Component({
  selector: 'app-root',
  imports: [Header, ExploreMovies, CreateMovie, FavoriteMovies, MovieDetails],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
