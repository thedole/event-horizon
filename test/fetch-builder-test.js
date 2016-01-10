var should = require('chai').should();
    
describe('fetch-builder', function () {
    var FetchBuilder = require('../src/fetch-builder');
    describe('constructor', function () {
    
        it('should exist', function () {
            should.exist(FetchBuilder, "Ouch");
        });
        
        it('should be a function', function () {
            FetchBuilder.should.be.a('function');
        });        
    });
    
    
    describe('builder', function () {
        var entityName =  'entityname',
            builder = new FetchBuilder(entityName);
        
        describe('getFetchXml function', function () {
            
            it('should exist', function () {
                should.exist(builder.getFetchXml);    
            });
            
            
            it('should return a string', function () {
                builder.getFetchXml().should.be.a('string');
            });            
            
            it('should return a string containing the entityname passed in', function () {
                builder.getFetchXml().should.match(new RegExp(entityName));
            });
            
        });
    });   
});