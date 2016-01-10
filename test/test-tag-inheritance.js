var TagBuilder = require('../src/tag-builder'),
    SpecificTagBuilder = (function(){
        
        var constructor = function(entityName){
                this.tagName = 'fetch';
                this.entityName = entityName;
                this.childTags = [new TagBuilder('entity').addAttribute({name: entityName})];
                this.attributes = {
                    version: '1.0',
                    "output-format": 'xml-platform',
                    mapping: 'logical',
                    distinct: false
                };
            };
            
            constructor.prototype = TagBuilder.prototype;
            
            return constructor;
    })();
        