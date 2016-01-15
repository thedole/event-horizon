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
        
        it('should have an addChild property', function () {
            builder.should.have.property('addChild');
        });
        
        
        describe('addChild function', function () {
            
            it('should increase number of children by one', function () {
                var before = builder.childTags.length;
                builder.addChild(new TagBuilder('newchild'));
                var after = builder.childTags.length;
                
                after.should.equal(before + 1);                
            });
            
            
            it('should set a parent property on child', function () {
                var child = new TagBuilder('child');
                builder.addChild(child);
                
                child.should.have.property('parent');
            });
            
            it('childs parent property should point to parent', function () {
                var child = new TagBuilder('child');
                builder.addChild(child);
                
                child.parent.should.equal(builder);
            });
            
        });
        
        
        it('should have an addAttribute property', function () {
           builder.should.have.property('addAttribute'); 
        });
    });    
});
