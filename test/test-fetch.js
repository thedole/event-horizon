var FetchBuilder = require('../src/fetch-builder'),
    testBuilder = new FetchBuilder('tek_medlemskategori');

testBuilder
    .addFetchAttribute('tek_navn')
    .addFetchAttribute('tek_foreningid')
    .addFetchAttribute('tek_medlemskategoriid')
    .orderBy('tek_foreningid', 'descending')
    .orderBy('tek_navn')
    .addFilter()
        .addCondition('statecode', {
            operator: 'eq',
            value: 0
        });
    
console.log(testBuilder.toString());    
console.log(testBuilder.render());