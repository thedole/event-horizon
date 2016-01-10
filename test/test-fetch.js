var FetchBuilder = require('../src/fetch-builder'),
    
    testBuilder = new FetchBuilder('tek_medlemskategori');

testBuilder
    .attribute('tek_navn')
    .attribute('tek_foreningid')
    .attribute('tek_medlemskategoriid');
console.log(testBuilder.render());