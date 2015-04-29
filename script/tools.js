"use strict";

// Do function on enter (may be used for form submit)
angular.module('cdty').directive('ngEnter', function() {
   return {
      link: function(scope, element, attrs) {
         element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
               scope.$apply(function() {
                  scope.$eval(attrs.ngEnter);
               });
               event.preventDefault();
            }
         });
      }
   };
});
