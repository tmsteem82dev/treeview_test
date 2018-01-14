var app = angular.module("treeApp");

app.controller("TreeController", function($scope){
    $scope.selectedNode = null;
    $scope.nodeSelected = false;
    $scope.balls = "eheheh";

    $scope.treedata = [{label: "Huisarts", id: "1290", description: "Dit is een hoofdcategorie.", 
    children:[
        { label: "Apotheekhoudend", id: "123", description: "Deze mensen hebben een apotheek. Yippee!"},
        { label: "Niet apotheek", id: "124", description: "Deze mensen hebben geen apotheek."}
    ]}];


    $scope.showSelected = function(node){
        console.log(node);
        $scope.selectedNode = node;
        $scope.nodeSelected = true;
        $scope.balls="khuyguy";
    };

});