(function() {
    'use strict';

    var selectFileCtrl = ['$scope', '$element', '$attrs', '$parse',
        function($scope, $element, $attrs, $parse) {
            // Get the var name
            var exp = $parse($attrs.selectFile || $attrs.selectFiles);
            // Get the file input element
            var inputNode = $element.find("input[type='file']:first");

            // Detect change on the file input and bind manually the variable
            // this is require because ng-model is not yet supported on file input
            inputNode.on('change', function(){
                exp.assign($scope, inputNode[0].files);
                $scope.$apply();
            });

            // Forward the click to the file input
            $element.on('click', function() {
                inputNode.click(function(e) {
                    e.stopPropagation();
                    return true;
                }).click();
            });
    }];
    var selectFileCompile = function(tElement, tAttrs) {
        var inputNode = tElement.find("input[type='file']:first");
        if (tAttrs.selectFileAccept)
            inputNode.attr("accept", tAttrs.selectFileAccept);
        if (tAttrs.hasOwnProperty('selectFileMultiple'))
            inputNode.attr("multiple", true);
    };

    angular.module('select-file', [])
        .directive('selectFile', function() {
            return {
                template: '<input type="file" ng-hide="true"/><span ng-transclude></span>',
                transclude: true,
                restrict: 'A',
                controller: selectFileCtrl,
                compile: selectFileCompile,
            };
        });
})();
