/* Libs */
require("angular/angular");  
require("angular-route/angular-route");  
require("angular-resource/angular-resource");

/* Globals */
_ = require("lodash");  
_urlPrefixes = {  
  API: "api/v1/",
  TEMPLATES: "static/app/"
};

/* Components */
require("./components/home/home");
require("./components/cpf/cpf");

/* App Dependencies */
angular.module("verifier", [
  "cpf",
  "home",
  "ngResource",
  "ngRoute",
]);

/* Config Vars */
var routesConfig = require("./routes"); 

/* App Config */
angular.module("verifier").config(routesConfig); 