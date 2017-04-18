import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Movie } from './app.movie';
import { MovieService } from './app.movie.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { BorrowComponent } from './app.borrow.component';
import { InMemoryDataService } from './app.in-memory-data-service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.vhsList.html',
  styleUrls: ['./movies.css']
})

export class VHSList implements OnInit {
  movies: Movie[] = [];
  selectedMovie = new Movie;
  model = new Movie();
  sortType: string = 'id';
  movie: Movie;

  @Input() editModel: Movie;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private movieService: MovieService,
    private location: Location
  ) { }

  getMovies(): void {
    this.movieService
      .getMovies()
      .then(movies => this.movies = movies);
  }

  onSubmitCreate() {
    this.model.rented = false;
    this.movieService.create(this.model)
    this.ngOnInit();
    ;
  }

  newMovie() {
    this.model = new Movie();
  }

  add(name: string, director: string, date: string, cover: string, rented: boolean, personName: string, personSurname: string, dateOfRent: string): void {
    var tempMovie = new Movie();
    tempMovie.name = name.trim();
    tempMovie.director = director.trim();
    tempMovie.date = date.trim();
    tempMovie.cover = cover.trim();
    tempMovie.rented = false;
    tempMovie.personName = personName.trim();
    tempMovie.personSurname = personSurname.trim();
    tempMovie.dateOfRent = dateOfRent.trim();
    this.movieService.create(tempMovie)
      .then(movie => {
        this.movies.push(movie);
        this.selectedMovie = null;
      });
  }

  rent(movie: Movie): void {
    movie.rented = !movie.rented;
    this.movieService.update(movie).then(() => {
      this.movies = this.movies.filter(h => h !== movie);
      if (this.selectedMovie === movie) { this.selectedMovie = null; }
    });
  }

  delete(movie: Movie): void {
    this.movieService
      .delete(movie.id)
      .then(() => {
        this.movies = this.movies.filter(m => m !== movie);
        if (this.selectedMovie === movie) { this.selectedMovie = null; }
      });
  }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  sortBy(criteria: string): void {
    this.sortType = criteria;
  }

}