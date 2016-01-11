module.exports = (function(){
    var TagBuilder = function(tagName){
        this.tagName = tagName;
        this.childTags = [];
        this.attributes = {};
    },
    
    TagBuilderPrototype = (function tagBuilder(){
        var openTagTemplate = '<{{tagname}}{{attributes}}>\n',
            closingTagTemplate = '</{{tagname}}>';
        function openTag(prefix){
            var result;
            
            result = replaceTagName.call(this, openTagTemplate);
            result = replaceAttributes.call(this, result);
            return prefix + result;
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
        
        function replaceAttributes(template){
            var attrs = this.attributes,
                attribute,
                value,
                output = [],
                result;
            
            if(Object.keys(attrs).length > 0){
                output.push('');
            }
                
            for (attribute in attrs) {
                if (attrs.hasOwnProperty(attribute)) {
                    value = attrs[attribute];
                    output.push(attribute + '="' + value + '"');
                }
            }
            result = output.join(' ');
            
            return template.replace(/\{\{attributes\}\}/, result);
        }
        
        function render(prefix){
            var hasContents = (this.childTags.length > 0);
            prefix = prefix || '';
            
            if(!hasContents){
                return openTag.call(this, prefix)
                        .replace(/>\n/, ' />');
            }
            
            return  openTag.call(this, prefix)+
                        renderChildTags.call(this, prefix)+
                    closeTag.call(this, prefix);
        }
        
        function addChild(child){
            this.childTags.push(child);
            return this;
        }
        
        function addAttribute(attribute) {
            var key, value;
            for (key in attribute) {
                if (attribute.hasOwnProperty(key)) {
                    value = attribute[key];
                    this.attributes[key] = value;
                }
            }
            
            return this;
        }
        
        return {
            render: render,
            addChild: addChild,
            addAttribute: addAttribute,
            addAttributes: addAttribute
        }
    })();
    
    TagBuilder.prototype = TagBuilderPrototype;
    TagBuilder.prototype.toString = function(){
        return '[TagBuilder: '+ this.tagName + ']';
    };
    return TagBuilder;
})();