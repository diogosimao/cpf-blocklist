function CpfListController($scope, CpfService) {  
  $scope.cpfs = [];
  $scope.cpf = [];
  $scope.operationLabel = "Incluir";
  $scope.status = { value: true };
  $scope.maskara = '000.000.000-00';
  $scope.hideCpfError = true;
  $scope.hideCpfSearchError = true;
  $scope.resultMsg = "";
  $scope.result = null;
  $scope.showSuccess = false;
  
  $scope.init = function() {
    return CpfService.getCpfs().then(function(cpfs) {
      angular.copy(cpfs, $scope.cpfs);
    });
  };

  $scope.resetBlackListForm = function(){
    $scope.id = null;
    $scope.number = null;
    $scope.status.value = true;
    $scope.operationLabel = "Incluir";
    $scope.disableCpfNumberInput = false;
    $scope.resetMsgs();
  }

  $scope.resetMsgs = function(){
    $scope.showResult = false;
    $scope.showSuccess = false;
    $scope.hideCpfError = true;
    $scope.hideCpfSearchError = true;
    $scope.resultMsg = "";
  }

  $scope.search = function(number){
    $scope.resetBlackListForm();
    $scope.resetMsgs();

    if(!$scope.isValidCPF(number)) {
      $scope.resultMsg = "CPF inválido.";
      $scope.hideCpfSearchError = false;
      return; 
    }
    
    var cpf_number = number;
    var exp = /\.|\-/g
    cpf_number = cpf_number.toString().replace( exp, "" ); 
    return CpfService.getCpf(cpf_number).then(function(cpf) {
      if(cpf.length === 0)
      {
        $scope.resultMsg = "CPF não encontrado.";
        $scope.hideCpfSearchError = false;
        return;
      }
      cpf = cpf[0];
      if(cpf.id) {
        $scope.result = cpf;
        $scope.showResult = true;
        for (i = 0; i < $scope.cpfs.length; i++)
        {
          if ($scope.cpfs[i].number === cpf.number) {
            $scope.numberSearch = null;
            return $scope.updateCpf(i, cpf);
          }
        }
      }
    });
  }

  $scope.blackList = function(number){
    $scope.resetMsgs();

    if(!$scope.isValidCPF(number)) {
      $scope.resultMsg = "CPF inválido.";
      $scope.hideCpfError = false;
      return; 
    }
    
    var cpf_number = number;
    var exp = /\.|\-/g
    cpf_number = cpf_number.toString().replace( exp, "" ); 
    
    if($scope.id){
      var cpf = {id: $scope.id, status: $scope.status.value};
      CpfService.updateCpf(cpf);
      $scope.cpfs[$scope.arrayIndex].status = $scope.status.value;
      $scope.resetBlackListForm();
    }
    else{
      return CpfService.getCpf(cpf_number).then(function(cpf) {
        if(cpf.length === 0)
        {
          $scope.cpf = {number: cpf_number, status: $scope.status.value };
          $scope.number = null;
          $scope.status.value = true;
          
          $scope.cpfs.push(CpfService.addCpfs($scope.cpf));
          $scope.resultMsg = "Inclusão realizada.";
          $scope.showSuccess = true;
          return;
        }
        if(cpf[0].id) {
          $scope.resultMsg = "CPF já existe.";
          $scope.hideCpfError = false;
          return;
        }
      });
    }
  }

  $scope.updateCpf = function($index, cpf){
    $scope.number = $scope.applyMaskaraOnNumber(cpf.number);
    $scope.id = cpf.id;
    $scope.arrayIndex = $index;
    $scope.disableCpfNumberInput = true;
    $scope.operationLabel = "Atualizar";
  }

  $scope.isValidCPF = function(number){
    if(!number || number === '') { return false; }
    var cleanCPF = number.replace(/\.|-|\s/g, '');
    var firstNineDigits = cleanCPF.substring(0, 9);
    var checker = cleanCPF.substring(9, 11);

    if (cleanCPF.length !== 11) {
      return false;
    }

    for (var i = 0; i < 10; i++) {
      if ('' + firstNineDigits + checker === Array(12).join(i)) {
        return false;
      }
    }

    var checker1 = $scope.calcChecker1(firstNineDigits);
    var checker2 = $scope.calcChecker2('' + firstNineDigits + checker1);

    if (checker.toString() === checker1.toString() + checker2.toString()) {
      return true;
    } else {
      return false;
    }
  }

  $scope.calcChecker1 = function(firstNineDigits) {
    var sum = null;

    for (var j = 0; j < 9; ++j) {
      sum += firstNineDigits.toString().charAt(j) * (10 - j);
    }

    var lastSumChecker1 = sum % 11;
    var checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1;

    return checker1;
  }

  $scope.calcChecker2 = function(cpfWithChecker1) {
    var sum = null;

    for (var k = 0; k < 10; ++k) {
      sum += cpfWithChecker1.toString().charAt(k) * (11 - k);
    }

    var lastSumChecker2 = sum % 11;
    var checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;

    return checker2;
  }
  
  $scope.maskaraFieldIteration = function(maskaraSize, onlyNumbersField){
    var fieldPosition = 0;    
    var newFieldValue = "";
    var isMaskDigit;

    for(i=0; i<= maskaraSize; i++) { 
      isMaskDigit  = (($scope.maskara.charAt(i) == "-") || ($scope.maskara.charAt(i) == "."))
      if (isMaskDigit) { 
        newFieldValue += $scope.maskara.charAt(i); 
        maskaraSize++;
      }
      else { 
        newFieldValue += onlyNumbersField.charAt(fieldPosition); 
        fieldPosition++; 
      }
    }
    return newFieldValue
  }

  $scope.applyMaskaraOnNumber = function(number){
    exp = /\-|\.|\/|\(|\)| /g
    if (!number || number === '') { return; }

    var onlyNumbersField = number.toString().replace( exp, "" ); 
    var maskaraSize = onlyNumbersField.length;; 

    return $scope.maskaraFieldIteration(maskaraSize, onlyNumbersField);
  }

  $scope.applyMaskara = function($event, number){
    var event = $event
    var inputDigit = event.keyCode;
    exp = /\-|\.|\/|\(|\)| /g
    if (!number || number === '') { return; }

    var onlyNumbersField = number.toString().replace( exp, "" ); 
    var maskaraSize = onlyNumbersField.length;; 

    if (inputDigit != 8) { // backspace  
      return $scope.maskaraFieldIteration(maskaraSize, onlyNumbersField);
    }
    else { 
      return number; 
    }
  }
}

angular.module("cpf")
  .controller("CpfListController", [
    "$scope",
    "CpfService",
    CpfListController
  ]);