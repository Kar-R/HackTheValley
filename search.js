var github = require("octonode");

var ghsearchterm;

var client = github.client();

//Github's search library
var ghsearch = client.search();

var recommend = function(searchFor, callback){    
    //search for repos
    var results = ghsearch.repos({
    q: searchFor,
    sort: 'created',
    order: 'asc'
    }, callback); //array of search results
    
}

module.exports = recommend;
