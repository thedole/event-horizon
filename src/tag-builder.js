module.exports = (function(){
    var TagBuilder = function(tagName){
        this.tagName = tagName;
        this.childTags = [];
    },
    
    TagBuilderPrototype = (function tagBuilder(){
        var openTagTemplate = '<{{tagname}}>\n',
            closingTagTemplate = '</{{tagname}}>';
        function openTag(prefix){
            return prefix + replaceTagName.call(this, openTagTemplate);
        }
        
        function closeTag(prefix){
            return prefix + replaceTagName.call(this, closingTagTemplate);
        }
        
        function renderChildTags(prefix){
            var children = this.childTags,
                len = children.length,
                result = [],
                tag,
                i;
                
            for (i = 0; i < len; i++) {
                tag = children[i];
                result.push(tag.render(prefix + '   '));
            }
            result.push('');
            return result.join('\n');
        }
        
        function replaceTagName(template){
            return template.replace(/\{\{tagname\}\}/, this.tagName);
        }
        
        function render(prefix){
            prefix = prefix || '';
            return  openTag.call(this, prefix)+
                        renderChildTags.call(this, prefix)+
                    closeTag.call(this, prefix);
        }
        
        function addChild(child){
            this.childTags.push(child);
            return this;
        }
        
        return {
            render: render,
            addChild: addChild
        }
    })();
    
    TagBuilder.prototype = TagBuilderPrototype;
    return TagBuilder;
})();