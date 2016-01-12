module.exports = (function(){
        var TagBuilder = require('../src/tag-builder'),
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
            
            return constructor;
    })();
