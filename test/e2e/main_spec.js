'use strict';

describe('see the home page', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should see the navigation menu items', function() {
    expect(element(by.id('js-navbar-collapse')).getText()).toContain('Home');
    expect(element(by.id('js-navbar-collapse')).getText()).toContain('About');
    expect(element(by.id('js-navbar-collapse')).getText()).toContain('Contact');
  });

});
