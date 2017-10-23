function routesConfig($routeProvider) {  
  $routeProvider
    .when("/", {
      templateUrl: _urlPrefixes.TEMPLATES + "components/cpf/cpf.html",
      label: "home"
    })
    .when("/cpf", {
      templateUrl: _urlPrefixes.TEMPLATES + "components/cpf/cpf.html",
      label: "cpfs"
    })
    .otherwise({
      templateUrl: _urlPrefixes.TEMPLATES + "404.html"
    });
}

routesConfig.$inject = ["$routeProvider"];

module.exports = routesConfig;  