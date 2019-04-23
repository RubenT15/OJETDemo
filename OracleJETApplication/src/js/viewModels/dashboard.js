/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','signals','ojs/ojmodule-element-utils','ojs/ojmodule-element','ojs/ojknockout'],
 function(oj, ko, $,signals,moduleUtils) {
  
    function DashboardViewModel() {
      function resolveVVM(name, moduleConfig) {
        var masterPromise = Promise.all([
          moduleUtils.createView({'viewPath':'views/modulosComunicados/'+ name + '.html'}),
          moduleUtils.createViewModel({'viewModelPath':'viewModels/modulosComunicados/'+ name})
        ]);
        masterPromise.then(
          function(values){
            var viewModel = new values[1]({'userInfoSignal':self.userInfoSignal});
            moduleConfig({'view':values[0],'viewModel':viewModel});
          },
          function(reason){}
        );
      };
      
      var self = this;
      self.userInfoSignal = new signals.Signal();
      self.firstConfig = ko.observable({'view':[],'viewModel':null});
      self.secondConfig = ko.observable({'view':[],'viewModel':null});
      resolveVVM("first", self.firstConfig);
      resolveVVM("second", self.secondConfig);
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
