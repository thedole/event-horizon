var Tag = require('../src/tag-builder'),
    t0 = new Tag('test'),
    t1 = new Tag('childTag'),
    t2 = new Tag('childOfChildTag');
    
t1.addChild(t2);    
t0.addChild(t1);
console.log(t0.render());