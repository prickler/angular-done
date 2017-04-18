"use strict";
var app_component_1 = require("./app.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var testing_2 = require("@angular/router/testing");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            imports: [testing_2.RouterTestingModule]
        })
            .overrideComponent(app_component_1.AppComponent, {
            set: {
                templateUrl: '/base/src/app/app.component.html',
            }
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should view title by interpolation', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch('VHS Rental Service');
    });
    it('should match h1 className', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.className).toMatch("title");
    });
});
//# sourceMappingURL=app.component.spec.js.map