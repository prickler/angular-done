import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from './app.movie';
import { MovieService } from './app.movie.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.rentTapes.html',
  styleUrls: ['./movies.css']
})

export class RentTapes implements OnInit {
  movies: Movie[] = [];
  movie: Movie;
  selectedMovie = new Movie;
  basePayment: number = 5;
  delayPenalty: number = 3;
  unrewindedPenalty: number = 3;
  brokenPenalty: number = 25;
  payment: number;

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

  return(movie: Movie): void {
    movie.rented= false;
    this.movieService.update(movie)
  } 

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  calculatePayment(delay: boolean, unrewinded: boolean, broken: boolean) {
    var payment = this.basePayment;
    if (delay) {
      payment += this.delayPenalty;
    }
    if (unrewinded) {
      payment += this.unrewindedPenalty;
    }
    if (broken) {
      payment += this.brokenPenalty;
    }
    return payment;
  }

}
