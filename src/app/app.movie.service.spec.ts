import { async, inject, TestBed } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions } from '@angular/http';
import { Movie } from './app.movie';
import { MovieService } from './app.movie.service';

const movies = [
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
] as Movie[];

describe('Movie service', function () {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [MovieService]
        })
            .compileComponents();
    }));

    it('can instantiate service when inject service',
        inject([MovieService], (service: MovieService) => {
            expect(service instanceof MovieService).toBe(true);
        }));
});