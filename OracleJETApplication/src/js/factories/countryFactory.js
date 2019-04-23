define(['ojs/ojcore'],function(oj){
    var CountryFactory = {
        resourceUrl: "https://restcountries.eu/rest/v2/all",
        createCountryModel: function(){
            var Country=oj.Model.extend({
                urlRoot:this.resourceUrl,
                idAttribute:"name"
            });
            return new Country();
        },
        createCountryCollection:function(){
            var Countries= oj.Collection.extend({
                url:this.resourceUrl,
                model:this.createCountryModel()
            });
            return new Countries()
        }
    };
    return CountryFactory;
});

