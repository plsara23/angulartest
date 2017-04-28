'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /inputdata when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/inputdata");
  });


  describe('inputdata', function() {

    beforeEach(function() {
      browser.get('index.html#!/inputdata');
    });


    it('should render inputdata when user navigates to /inputdata', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('monthsview', function() {

    beforeEach(function() {
      browser.get('index.html#!/monthsview');
    });


    it('should render monthsview when user navigates to /monthsview', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
