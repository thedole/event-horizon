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
        
        function renderChildTags(){
            var children = this.childTags,
                len = children.length,
                childRender,
                result = [],
                tag,
                i;
                
            for (i = 0; i < len; i++) {
                tag = children[i];
                childRender = tag.render();
                console.log(childRender);
                result.push(childRender);
            }
            result.push('');
            return result.join('\n');
        }
        
        function replaceTagName(template){
            return template.replace(/\{\{tagname\}\}/, this.tagName);
        }
        
        function render(){
            return  openTag.call(this)+
                        renderChildTags.call(this)+
                    closeTag.call(this);
        }
        
        function addChild(child){
            this.childTags.push(child);
        }
        
        return {
            render: render,
            addChild: addChild
        }
    })();
    
    TagBuilder.prototype = TagBuilderPrototype;
    return TagBuilder;
})();