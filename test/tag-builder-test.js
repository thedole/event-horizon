var should = require('chai').should(),
    TagBuilder;

describe('tag builder', function () {
    TagBuilder = require('../src/tag-builder');
    
    describe('constructor', function () {
        it('should exist', function () {
            should.exist(TagBuilder);
        });
        
        
        it('should produce an object', function () {
            var builder = new TagBuilder('test');
            builder.should.be.an('object');
        });
    });
    
    
    describe('builder instance', function () {
        var tagName = 'thetagname',
            builder = new TagBuilder(tagName);
        
        it('should have a render property', function () {
            builder.should.have.property('render');    
        });
        
        
        it('should have an addChild property', function () {
            builder.should.have.property('addChild');
        });
        
        it('should have an addAttribute property', function () {
           builder.should.have.property('addAttribute'); 
        });
                
        
       describe('render', function () {
            
            it('should be a function', function () {
                builder.render.should.be.a('function');
            });
                
            it('should produce a tag with the given name', function () {
                var expected = '<' + tagName + ' />'
                    result = builder.render();
                    
                    result.should.equal(expected);
            });
            
            it('should render child tags', function () {
                var parentWithChild = new TagBuilder('parent')
                            .addChild(new TagBuilder('child')),
                    result = parentWithChild.render();
                            
                result.should.match(/<child \/>/);
            });
            
            
            it('should render attributes', function () {
                var tagWithAttribute = new TagBuilder('tag')
                            .addAttribute({test: "Value"}),
                    result = tagWithAttribute.render();
                    
                result.should.match(/test="Value"/);
            });
            
        }); 
    });    
});
