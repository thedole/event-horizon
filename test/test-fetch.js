var FetchBuilder = require('../src/fetch-builder'),
    
    testBuilder = new FetchBuilder('test', {distinct: true});
    
    console.log(testBuilder.getFetchXml());
