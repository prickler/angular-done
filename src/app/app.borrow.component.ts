import { Component, OnInit, Input } from '@angular/core';
import { InMemoryDataService } from './app.in-memory-data-service'
import { Movie } from './app.movie';
import { MovieService } from './app.movie.service';

@Component({
    selector: 'app-borrow',
    templateUrl: './borrow.html'
})

export class BorrowComponent implements OnInit {

    @Input() movie: Movie;

    constructor(
        private movieService: MovieService,
    ) { }

    rent(movie: Movie, borrowerName: string, borrowerSurname: string, dateOfRent: string): void {
        movie.rented = true;
        movie.personName = borrowerName;
        movie.personSurname = borrowerSurname;
        movie.dateOfRent = dateOfRent;
        this.movieService.update(movie);
    }

    ngOnInit() {
    }

}