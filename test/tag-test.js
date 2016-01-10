var Tag = require('../src/tag-builder'),
    t = new Tag('test');
    
t.addChild(new Tag('childTag'));
console.log(t.render());