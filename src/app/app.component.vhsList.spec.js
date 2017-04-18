"use strict";
var app_component_vhsList_1 = require("./app.component.vhsList");
var app_borrow_component_1 = require("./app.borrow.component");
var app_rented_pipe_1 = require("./app.rented.pipe");
var app_free_pipe_1 = require("./app.free.pipe");
var app_sort_pipe_1 = require("./app.sort.pipe");
var app_filter_pipe_1 = require("./app.filter.pipe");
var app_movie_service_1 = require("./app.movie.service");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var testing_2 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
describe('VHSList', function () {
    var de;
    var comp;
    var fixture;
    var el;
    var spy;
    var movies;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_vhsList_1.VHSList, app_borrow_component_1.BorrowComponent, app_filter_pipe_1.MovieFilterPipe, app_rented_pipe_1.RentedPipe, app_free_pipe_1.FreePipe, app_sort_pipe_1.SortPipe],
            imports: [testing_2.RouterTestingModule, forms_1.FormsModule, http_1.HttpModule],
            providers: [app_movie_service_1.MovieService]
        })
            .overrideComponent(app_component_vhsList_1.VHSList, {
            set: {
                templateUrl: '/base/src/app/app.component.vhsList.html',
                styleUrls: ['/base/src/app/app.movies.css'],
            }
        })
            .overrideComponent(app_borrow_component_1.BorrowComponent, {
            set: {
                templateUrl: '/base/src/app/borrow.html',
            }
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_vhsList_1.VHSList);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('id'));
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
        ];
        var movieService = fixture.debugElement.injector.get(app_movie_service_1.MovieService);
        var spy = spyOn(movieService, 'getMovies').and.returnValue(Promise.resolve(movies));
        comp.ngOnInit();
        fixture.detectChanges();
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should view tablehead inner text value', function () {
        var th = document.getElementById("name");
        expect(th.innerText).toMatch('');
    });
    it('should show movies list', function () {
        fixture.detectChanges();
        de = fixture.debugElement.query(platform_browser_1.By.css('tbody'));
        el = de.nativeElement;
        expect(el).toBeDefined();
    });
});
//# sourceMappingURL=app.component.vhsList.spec.js.map