define(['ojs/ojcore', 'knockout', 'jquery','signals',  
    'ojs/ojknockout', 'ojs/ojinputtext'],  
 function(oj, ko, $,signals) {  
    
    var viewModel=function(params) {  
      var self = this;  
      console.log(params)
      var userInfoSignal = params.userInfoSignal;  
      self.userName = ko.observable();  
      self.userCity = ko.observable();  
      self.userState = ko.observable();  
      ko.computed(function(){  
        userInfoSignal.dispatch(self.userName(), self.userCity(), self.userState());  
      });  
    };   
      self.connected = function() {  
        // Implement if needed  
      };  
      self.disconnected = function() {  
        // Implement if needed  
      };  
      self.transitionCompleted = function() {  
        // Implement if needed  
      };  
    return viewModel;  
  }  
);  
