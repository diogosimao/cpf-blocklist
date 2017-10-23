function CpfService($resource) {
  var self = this;

  self.CpfResource = $resource(_urlPrefixes.API + "cpf/:id/");

  self.getCpfs = function() {
    return self.CpfResource.query().$promise;
  };

  self.addCpfs = function(params) {
    return self.CpfResource.save(params);
  };  

  self.getCpf = function(cpf_number) {
    var cpfResource = $resource(_urlPrefixes.API + "cpf?cpf_number=:cpf_number/",
      { cpf_number: cpf_number});
    return cpfResource.query().$promise;;
  }
  self.updateCpf = function(params) {
    var cpfResource = $resource(_urlPrefixes.API + "cpf/:id/",
      { id: params.id}, 
      { 'update': { method:'PUT' }});
    var cpf = cpfResource.get();
    cpf.status = params.status
    cpfResource.update(cpf);
  }
}

angular.module("cpf")  
  .service("CpfService", ["$resource", CpfService]);