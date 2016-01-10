var TagBuilder = require('../src/tag-builder'),
    SpecificTagBuilder = (function(){
        
        var proto =  Object.create(new TagBuilder('specific')),
            constructor = function(){
                this.tagName = 'SpecificTag';
                this.childTags = [new TagBuilder('SpecificChild')];
                this.attributes = {specific1: 'specificValue'}
            };
            
            constructor.prototype = proto;
            
            return constructor;
    })(),
    specificTag = new SpecificTagBuilder();
    
    console.log(specificTag.render());
    
    
    
    
    