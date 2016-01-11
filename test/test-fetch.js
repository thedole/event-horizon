var FetchBuilder = require('../src/fetch-builder'),
    
    testBuilder = new FetchBuilder('tek_medlemskategori');

testBuilder
    .fetchAttribute('tek_navn')
    .fetchAttribute('tek_foreningid')
    .fetchAttribute('tek_medlemskategoriid');
    
console.log(testBuilder.toString());    
console.log(testBuilder.render());