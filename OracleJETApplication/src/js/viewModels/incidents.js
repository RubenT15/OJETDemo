/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojknockout','ojs/ojnavigationlist',
],
 function(oj, ko, $) {
  
    function IncidentsViewModel() {
      var self = this;

      $(function(){
          let elementos=$(".navlistcontainer").find("a");
          
         let counter=1;
            for(let a of elementos){
                let elementCounter=0;
                elementCounter+=counter++;
                console.log("#item"+elementCounter)
                a.addEventListener("click",function(){
                    $("#item"+elementCounter).css({"border-color":"blue","width":"100px","height":"30px","display":"block"});
                    console.log("listener")
                    console.log($("#item"+elementCounter))
                })
            }
      }) 
      

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
    return new IncidentsViewModel();
  }
);
