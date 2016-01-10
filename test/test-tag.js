var Tag = require('../src/tag-builder'),
    t = new Tag('test')
        .addAttribute({depth: 0})
        .addAttributes({hello: "World", src: "http://www.test.me"})
        .addChild(
            new Tag('childTag')
                .addAttribute({depth: 1})
                .addChild(
                    new Tag('childOfChildTag')
                        .addAttribute({depth: 2})));
        
console.log(t.render());