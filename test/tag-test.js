var Tag = require('../src/tag-builder'),
    t = new Tag('test')
        .addChild(
            new Tag('childTag')
                .addChild(new Tag('childOfChildTag'))
                );
        
console.log(t.render());