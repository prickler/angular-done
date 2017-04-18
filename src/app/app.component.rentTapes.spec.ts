import { RentTapes } from './app.component.rentTapes';
import { BorrowComponent } from './app.borrow.component';
import { RentedPipe } from './app.rented.pipe';
import { FreePipe } from './app.free.pipe';
import { SortPipe } from './app.sort.pipe';
import { MovieFilterPipe } from './app.filter.pipe';
import { MovieService } from './app.movie.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('RentTapes', function () {
    let de: DebugElement;
    let comp: RentTapes;
    let fixture: ComponentFixture<RentTapes>;
    let el: HTMLElement;
    let spy: jasmine.Spy;
    let movies;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RentTapes, BorrowComponent, MovieFilterPipe, RentedPipe, FreePipe, SortPipe],
            imports: [RouterTestingModule, FormsModule, HttpModule],
            providers: [MovieService]
        })
            .overrideComponent(RentTapes, {
                set: {
                    templateUrl: '/base/src/app/app.component.rentTapes.html',
                    styleUrls: ['/base/src/app/app.movies.css'],
                }
            })
            .overrideComponent(BorrowComponent, {
                set: {
                    templateUrl: '/base/src/app/borrow.html',
                }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RentTapes);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('about'));
        el = fixture.nativeElement;
        movies = [
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
        ]
        let movieService = fixture.debugElement.injector.get(MovieService);
        let spy = spyOn(movieService, 'getMovies').and.returnValue(Promise.resolve(movies));
        comp.ngOnInit();
        fixture.detectChanges();
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should show movies list', () => {
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('tbody'));
        el = de.nativeElement;
        expect(el).toBeDefined();
    });

});
