"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var app_movie_service_1 = require("./app.movie.service");
var movies = [
    {
        id: 1,
        name: 'Pocahontas',
        director: 'Eric Goldberg',
        date: '1995',
        cover: 'http://1.fwcdn.pl/po/87/12/8712/7535077.2.jpg',
        rented: false,
        personName: '',
        personSurname: '',
        dateOfRent: ''
    }
];
describe('Movie service', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [app_movie_service_1.MovieService]
        })
            .compileComponents();
    }));
    it('can instantiate service when inject service', testing_1.inject([app_movie_service_1.MovieService], function (service) {
        expect(service instanceof app_movie_service_1.MovieService).toBe(true);
    }));
});
//# sourceMappingURL=app.movie.service.spec.js.map