module.exports = (function(){
        var TagBuilder = require('../src/tag-builder'),
            Condition = require('../src/condition-builder'),
            constructor = function(type){
                this.tagName = 'filter';
                this.type = type;
                switch (type) {
                    case 'or':
                    case 'OR':
                    case 'Or':
                    case '||':
                        this.type = 'or';
                        break;
                
                    default:
                        this.type = 'and';
                        break;
                }
                this.attributes = {
                    type: this.type
                };
            };
            
            constructor.prototype = new TagBuilder('filter');
            constructor.prototype.constructor = TagBuilder;
            constructor.prototype.toString = function(){ return "[FilterBuilder: " + this.type + ']' };
            
            constructor.prototype.addCondition = function(attribute, options){
                  this.childTags.push(new Condition(attribute, options));
            };
            
            return constructor;
    })();
