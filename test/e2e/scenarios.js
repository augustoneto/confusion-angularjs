'use strict';

describe('conFusion App E2E Testing', function() {
    
    it('should automatically redirect to / when location hash/fragment is empty', function() {

        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/");

    });

});

describe('index', function() {
    beforeEach(function() {
      browser.get('index.html#/');
    });

    it('should have a title', function() {
      expect(browser.getTitle()).
        toEqual('Ristorante Con Fusion');
    });
  });
  
