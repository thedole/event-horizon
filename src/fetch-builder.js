module.exports = (function(){
        var TagBuilder = require('../src/tag-builder'),
            FetchAttribute = require('../src/fetch-attribute'),
            OrderAttribute = require('../src/order-attribute'),
            FilterBuilder = require('../src/filter-builder'),
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
            
            constructor.prototype = new TagBuilder('fetch');
            constructor.prototype.constructor = TagBuilder;
            constructor.prototype.toString = function(){ return "[FetchBuilder: " + this.entityName + ']' };
            constructor.prototype.addFetchAttribute = function(name){
                this.entityTag.addChild(
                    new FetchAttribute(name)
                    );
                return this;
            };
            constructor.prototype.orderBy = function(name, direction){
                this.entityTag.addChild(
                    new OrderAttribute(name, direction)
                    );
                return this;
            }
            constructor.prototype.addFilter = function(type){
                this.entityTag.addChild(
                    new FilterBuilder(type)
                    );
                return this;
            }
            
            return constructor;
    })();
