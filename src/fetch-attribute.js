module.exports = (function(){
        var TagBuilder = require('../src/tag-builder'),
            constructor = function(attributeName){
                this.tagName = 'attribute';
                this.attributeName = attributeName;
                this.attributes = {
                    name: attributeName
                };
            };
            
            constructor.prototype = new TagBuilder('attribute');
            constructor.prototype.constructor = TagBuilder;
            constructor.prototype.toString = function(){ return "[FetchAttribute: " + this.attributeName + ']' };
            
            return constructor;
    })();
