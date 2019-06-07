var myApp = angular.module("myApp", ['ngRoute']);

myApp.controller("FileExplorerCntrl", ['$scope', function($scope) {
    $scope.delete = function(data) {
        data.nodes = [];
    };
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
    };
    $scope.tree = [{name: "Folder", nodes: []}];
}]);

