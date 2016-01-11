module.exports = (function(){
        var TagBuilder = require('../src/tag-builder'),
            constructor = function(attributeName, direction){
                this.tagName = 'order';
                this.attributeName = attributeName;
                
                switch (direction) {
                    case true:
                    case 'desc':
                    case 'Desc':
                    case 'DESC':
                    case 'descending':
                    case 'Descending':
                        this.descending = ''+true;
                        break;
                
                    default:
                        this.descending = ''+false;
                        break;
                }
                this.attributes = {
                    attribute: this.attributeName,
                    descending: this.descending
                };
            };
            
            constructor.prototype = new TagBuilder('order');
            constructor.prototype.constructor = constructor;
            constructor.prototype.toString = function(){ return "[OrderAttribute: " + this.attributeName + ']' };
            
            return constructor;
    })();
