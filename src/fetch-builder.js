module.exports = (function(){
    var FetchBuilder = function FetchBuilder(primaryEntity, options){
        if(!(this instanceof FetchBuilder)){
            return new FetchBuilder(primaryEntity);
        }
        
        this.primaryEntity = primaryEntity;
        this._options = options || {};
    };
    
    FetchBuilder.prototype = {
        defaults: {
            version: '1.0',
            format: 'xml-platform',
            mapping: 'logical',
            distinct: false
        },
        openTagTemplate: '<fetch version="{{version}}" output-format="{{format}}" mapping="{{mapping}}" distinct="{{distinct}}">',
        openTag: function(){
            var tag,
                opt = this._options,
                def = this.merge({}, this.defaults);
                opt = this.merge(def, opt);
            tag = this.openTagTemplate
                .replace(/\{\{version\}\}/, opt.version)
                .replace(/\{\{format\}\}/, opt.format)
                .replace(/\{\{mapping\}\}/, opt.mapping)
                .replace(/\{\{distinct\}\}/, ''+opt.distinct);
                
           return tag;
        },
        entityTagTemplate: '<entity name="{{entityname}}">',
        entityOpenTag: function(){
            return this.entityTagTemplate
                  .replace(/\{\{entityname\}\}/, this.primaryEntity);
        },
        entityCloseTag: function(){ return '</entity>'; },
        closeTag: function(){ return '</fetch>'; },
        getFetchXml: function (){
            return  this.openTag()+
                        this.entityOpenTag()+
                        this.entityCloseTag()+
                    this.closeTag();
        },
        merge: function(obj1, obj2){
            for (var key in obj2) {
                if (obj2.hasOwnProperty(key)) {
                    obj1[key] = obj2[key];
                }
            }
            return obj1;
        }
    };
    
    return FetchBuilder;
})();