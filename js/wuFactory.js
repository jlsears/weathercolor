app.factory('wu',['$http', function($http){

function getUrl(service, zip){
return 'http://api.wunderground.com/api/6340c030b5c4c3a9/' + service + '/q/' + zip + '.json?callback=JSON_CALLBACK'
}

function getConditions(zip){
  var url = getUrl('conditions', zip);
  return $http.jsonp(url);
}

return{getConditions:getConditions}

}])