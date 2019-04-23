define(['ojs/ojcore', 'knockout', 'jquery','signals'],  
 function(oj, ko, $,signals) {  
    
    var viewModel=function(params) {  
      var self = this;  
      console.log(params);
      var userInfoSignal = params.userInfoSignal;  
      self.userName = ko.observable();  
      self.userCity = ko.observable();  
      self.userState = ko.observable();  
  
  
      userInfoSignal.add(function(user, city, state) {  
        self.userName(user);  
        self.userCity(city);  
        self.userState(state);  
      });  
      self.connected = function() {  
        // Implement if needed  
      };  
  
  
      self.disconnected = function() {  
        // Implement if needed  
      };  
  
  
      self.transitionCompleted = function() {  
        // Implement if needed  
      };  
    }  
  
  
    return viewModel;  
  }  
);  
