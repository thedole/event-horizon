var should = require('chai').should(),
    t = require('../src/fetch-builder');

describe('custom-view', function () {
    var CustomView = require('../src/custom-view');
        
    describe('constructor', function () {
        
        it('should exist', function () {
            should.exist(CustomView, "Ouch");
        });
        
        it('should be a function', function () {
            CustomView.should.be.a('function', 'is not a function');
        });        
    });    
});
