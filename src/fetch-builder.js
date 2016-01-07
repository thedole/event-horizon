module.exports = (function(){
    return function FetchBuilder(primaryEntity){
        if(!(this instanceof FetchBuilder)){
            return new FetchBuilder(primaryEntity);
        }
        
        this._fetchXml = primaryEntity;
        
        this.getFetchXml = function(){
            return this._fetchXml;
        }
    };
})();