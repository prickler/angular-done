"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_movie_1 = require("./app.movie");
var app_movie_service_1 = require("./app.movie.service");
var RentTapes = (function () {
    function RentTapes(router, movieService, location) {
        this.router = router;
        this.movieService = movieService;
        this.location = location;
        this.movies = [];
        this.selectedMovie = new app_movie_1.Movie;
        this.basePayment = 5;
        this.delayPenalty = 3;
        this.unrewindedPenalty = 3;
        this.brokenPenalty = 25;
    }
    RentTapes.prototype.getMovies = function () {
        var _this = this;
        this.movieService
            .getMovies()
            .then(function (movies) { return _this.movies = movies; });
    };
    RentTapes.prototype.return = function (movie) {
        movie.rented = false;
        this.movieService.update(movie);
    };
    RentTapes.prototype.ngOnInit = function () {
        this.getMovies();
    };
    RentTapes.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    RentTapes.prototype.calculatePayment = function (delay, unrewinded, broken) {
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
    };
    return RentTapes;
}());
RentTapes = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.rentTapes.html',
        styleUrls: ['./movies.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        app_movie_service_1.MovieService,
        common_1.Location])
], RentTapes);
exports.RentTapes = RentTapes;
//# sourceMappingURL=app.component.rentTapes.js.map