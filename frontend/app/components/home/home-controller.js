function HomeController() {  
  var that = this;
  that.foo = "Foo!";
  console.log(that); // should print out the controller object
}

angular.module("home")  
  .controller("HomeController", [
    HomeController
  ]);