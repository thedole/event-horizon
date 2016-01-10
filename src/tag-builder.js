module.exports = (function(){
    var TagBuilder = function(tagName){
        this.tagName = tagName;
        this.childTags = [];
    },
    
    TagBuilderPrototype = (function tagBuilder(){
        var openTagTemplate = '<{{tagname}}>\n',
            closingTagTemplate = '</{{tagname}}>';
        function openTag(){
            return replaceTagName.call(this, openTagTemplate);
        }
        
        function closeTag(){
            return replaceTagName.call(this, closingTagTemplate);
        }
        
        function childTags(){
            var children = this.childTags,
                len = children.length,
                result = [],
                tag,
                i;
                
            for (i = 0; i < len; i++) {
                tag = children[i];
                result.push(tag.render());
            }
            
            return children.join('\n');
        }
        
        function replaceTagName(template){
            return template.replace(/\{\{tagname\}\}/, this.tagName);
        }
        
        function render(){
            return  openTag.call(this)+
                        childTags.call(this)+
                    closeTag.call(this);
        }
        
        return {
            render: render
        }
    })();
    
    TagBuilder.prototype = TagBuilderPrototype;
    return TagBuilder;
})();