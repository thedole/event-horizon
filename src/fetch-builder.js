module.exports = (function(){
        var TagBuilder = require('../src/tag-builder'),
            constructor = function(entityName){
                this.tagName = 'fetch';
                this.entityName = entityName;
                this.entityTag = new TagBuilder('entity').addAttribute({name: entityName})
                this.childTags = [this.entityTag];
                this.attributes = {
                    version: '1.0',
                    "output-format": 'xml-platform',
                    mapping: 'logical',
                    distinct: false
                };
            };
            
            constructor.prototype = TagBuilder.prototype;
            constructor.prototype.attribute = function(name){
                this.entityTag.addChild(
                    new TagBuilder('attribute')
                        .addAttribute({name: name}));
                return this;
            }
            
            return constructor;
    })();
