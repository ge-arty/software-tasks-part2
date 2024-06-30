import { MovieService } from './../../services/movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent {
  title: string = '';
  movies: any[] = [];
  displayedColumns: string[] = ['title'];

  constructor(private _movieService: MovieService) {}

  search() {
    this._movieService.searchMovies(this.title).subscribe((response) => {
      this.movies = response.results;
    });
  }
}
