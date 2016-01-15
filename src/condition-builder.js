module.exports = (function(){
        var TagBuilder = require('../src/tag-builder'),
            constructor = function(attributeName, attributes){
                this.tagName = 'condition';
                this.attributeName = attributeName;
                
                this.attributes = {
                    attribute: this.attributeName
                };
                
                for (var attr in attributes) {
                    if (attributes.hasOwnProperty(attr)) {
                        this.attributes[attr] = attributes[attr];
                    }
                }
            };
            
            constructor.prototype = new TagBuilder('condition');
            constructor.prototype.constructor = TagBuilder;
            constructor.prototype.toString = function(){ return "[ConditionBuilder: " + this.type + ']' };
            
            return constructor;
    })();
