/// <reference path="angular.min.js" />

//method chaining to create a module and a controller and attach the controller with the module.
var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {

                    var country = {
                        Name: "USA",
                        Capital: "Washington, DC",
                        Flag: "/images/usa-flag.png"
                    }
                    $scope.Country = country;
                })
                .controller("twowaybind", function ($scope) {

                    var country = {
                        Name: "SL",
                        Capital: "Colombo"
                    }
                    $scope.Country = country;
                })
                .controller("ngrepeat", function ($scope) {
                    var employees = [
                        { firstName: "Tharaka", lastName: "Herath", Gender: "Male", Salary: 35000 },
                        { firstName: "Thushara", lastName: "Bandara", Gender: "Male", Salary: 35000 },
                        { firstName: "Eranda", lastName: "Liyanage", Gender: "Male", Salary: 35000 },
                        { firstName: "Gihan", lastName: "Chanaka", Gender: "Male", Salary: 25000 },
                        { firstName: "Sharaniya", lastName: "Jayasekaran", Gender: "Female", Salary: 55000 },
                    ];

                    var countries = [
                        {
                            name: "Sri lanka",
                            cities: [
                              { name: "Colombo" },
                              { name: "Kandy" },
                              { name: "Trinco" }
                            ]
                        },
                        {
                            name: "Australia",
                            cities: [
                              { name: "Victoria" },
                              { name: "Melbourn" },
                              { name: "Sydney" }
                            ]
                        },
                        {
                            name: "UK",
                            cities: [
                              { name: "Chelsey" },
                              { name: "Birmingham" },
                              { name: "London" }
                            ]
                        },
                    ]

                    $scope.employees = employees;
                    $scope.countries = countries;
                })
                .controller("ngevents", function ($scope) {
                    var technologies = [
                        { Name: "C#", Likes: 0, Dislikes: 0 },
                        { Name: "ASP Web API", Likes: 0, Dislikes: 0 },
                        { Name: "AngularJS", Likes: 0, Dislikes: 0 },
                        { Name: "SignalR", Likes: 0, Dislikes: 0 }
                    ];

                    $scope.technologies = technologies;

                    $scope.increaseLikes = function (technology) {
                        technology.Likes++;
                    }

                    $scope.increaseDislikes = function (technology) {
                        technology.Dislikes++;
                    }
                })
                .controller("ngfilters", function ($scope) {
                    var employees = [
                        { FirstName: "Tharaka", DateOfBirth: new Date("November 23, 1980"), Gender: "Male", Salary: 35000.988 },
                        { FirstName: "Thushara", DateOfBirth: new Date("May 05, 1986"), Gender: "Male", Salary: 35000 },
                        { FirstName: "Eranda", DateOfBirth: new Date("August 13, 1978"), Gender: "Male", Salary: 35000 },
                        { FirstName: "Gihan", DateOfBirth: new Date("October 29, 1992"), Gender: "Male", Salary: 25000 },
                        { FirstName: "Sharaniya", DateOfBirth: new Date("December 30, 1990"), Gender: "Female", Salary: 55000 },
                    ];

                    $scope.employees = employees;
                    $scope.rowLimit = 3;
                })
                .controller("ngsorting", function ($scope) {
                    var employees = [
                        { FirstName: "Tharaka", DateOfBirth: new Date("November 23, 1980"), Gender: "Male", Salary: 35000.988 },
                        { FirstName: "Thushara", DateOfBirth: new Date("May 05, 1986"), Gender: "Male", Salary: 35000 },
                        { FirstName: "Eranda", DateOfBirth: new Date("August 13, 1978"), Gender: "Male", Salary: 35000 },
                        { FirstName: "Gihan", DateOfBirth: new Date("October 29, 1992"), Gender: "Male", Salary: 25000 },
                        { FirstName: "Sharaniya", DateOfBirth: new Date("December 30, 1990"), Gender: "Female", Salary: 55000 },
                    ];

                    $scope.employees = employees;
                    $scope.sortColumn = 'FirstName';
                }).controller("ngfullduplexsorting", function ($scope) {
                    var employees = [
                        { FirstName: "Tharaka", DateOfBirth: new Date("November 23, 1980"), Gender: "Male", Salary: 35000.988 },
                        { FirstName: "Thushara", DateOfBirth: new Date("May 05, 1986"), Gender: "Male", Salary: 35000 },
                        { FirstName: "Eranda", DateOfBirth: new Date("August 13, 1978"), Gender: "Male", Salary: 35000 },
                        { FirstName: "Gihan", DateOfBirth: new Date("October 29, 1992"), Gender: "Male", Salary: 25000 },
                        { FirstName: "Sharaniya", DateOfBirth: new Date("December 30, 1990"), Gender: "Female", Salary: 55000 },
                    ];

                    $scope.employees = employees;
                    $scope.sortColumn = 'FirstName';
                    $scope.IsDescending = false;

                    $scope.sortData = function (column) {
                        $scope.IsDescending = ($scope.sortColumn == column) ? !$scope.IsDescending : false;
                        $scope.sortColumn = column;
                    }

                    $scope.getSortStyle = function (column) {
                        if ($scope.sortColumn == column) {
                            return $scope.IsDescending ? 'arrow-down' : 'arrow-up';
                        }

                        return '';
                    }
                }).controller("ngsearchfilter", function ($scope) {
                    var employees = [
                        { FirstName: "Tharaka", DateOfBirth: new Date("November 23, 1980"), Gender: "Male", Salary: 35000.988, City: "Godagama" },
                        { FirstName: "Thushara", DateOfBirth: new Date("May 05, 1986"), Gender: "Male", Salary: 35000, City: "Kandy" },
                        { FirstName: "Eranda", DateOfBirth: new Date("August 13, 1978"), Gender: "Male", Salary: 35000, City: "Kaduwela" },
                        { FirstName: "Gihan", DateOfBirth: new Date("October 29, 1992"), Gender: "Male", Salary: 25000, City: "Kaduwela" },
                        { FirstName: "Sharaniya", DateOfBirth: new Date("December 30, 1990"), Gender: "Female", Salary: 55000, City: "Kaduwela" },
                    ];

                    $scope.employees = employees;
                }).controller("ngsearchmultiplecolumnsingletextbox", function ($scope) {
                    var employees = [
                        { FirstName: "Tharaka", DateOfBirth: new Date("November 23, 1980"), Gender: "Male", Salary: 35000.988, City: "Godagama" },
                        { FirstName: "Thushara", DateOfBirth: new Date("May 05, 1986"), Gender: "Male", Salary: 35000, City: "Kandy" },
                        { FirstName: "Eranda", DateOfBirth: new Date("August 13, 1978"), Gender: "Male", Salary: 35000, City: "Kaduwela" },
                        { FirstName: "Gihan", DateOfBirth: new Date("October 29, 1992"), Gender: "Male", Salary: 25000, City: "Kaduwela" },
                        { FirstName: "Sharaniya", DateOfBirth: new Date("December 30, 1990"), Gender: "Female", Salary: 55000, City: "Kaduwela" },
                    ];

                    $scope.employees = employees;
                    $scope.search = function (item) {
                        if ($scope.searchText == undefined) {
                            return true;
                        } else {
                            if (item.FirstName.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.City.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                                return true;
                            }
                        }

                        return false;
                    }
                }).controller("ngcustomfilter", function ($scope) {
                    var employees = [
                        { FirstName: "Tharaka", DateOfBirth: new Date("November 23, 1980"), Gender: 1, Salary: 35000.988, City: "Godagama" },
                        { FirstName: "Thushara", DateOfBirth: new Date("May 05, 1986"), Gender: 1, Salary: 35000, City: "Kandy" },
                        { FirstName: "Eranda", DateOfBirth: new Date("August 13, 1978"), Gender: 1, Salary: 35000, City: "Kaduwela" },
                        { FirstName: "Gihan", DateOfBirth: new Date("October 29, 1992"), Gender: 3, Salary: 25000, City: "Kaduwela" },
                        { FirstName: "Sharaniya", DateOfBirth: new Date("December 30, 1990"), Gender: 2, Salary: 55000, City: "Kaduwela" },
                    ];

                    $scope.employees = employees;
                }).controller("nghideshow", function ($scope) {
                    var employees = [
                        { FirstName: "Tharaka", DateOfBirth: new Date("November 23, 1980"), Gender: 1, Salary: 35000.988, City: "Godagama" },
                        { FirstName: "Thushara", DateOfBirth: new Date("May 05, 1986"), Gender: 1, Salary: 35000, City: "Kandy" },
                        { FirstName: "Eranda", DateOfBirth: new Date("August 13, 1978"), Gender: 1, Salary: 35000, City: "Kaduwela" },
                        { FirstName: "Gihan", DateOfBirth: new Date("October 29, 1992"), Gender: 3, Salary: 25000, City: "Kaduwela" },
                        { FirstName: "Sharaniya", DateOfBirth: new Date("December 30, 1990"), Gender: 2, Salary: 55000, City: "Kaduwela" },
                    ];

                    $scope.employees = employees;
                }).controller("nginit", function ($scope) {
                    var employees = [
                        { FirstName: "Tharaka", Salary: 35000.988, City: "Godagama" },
                        { FirstName: "Thushara", Salary: 35000, City: "Kandy" },
                        { FirstName: "Eranda", Salary: 35000, City: "Kaduwela" },
                        { FirstName: "Gihan", Salary: 25000, City: "Kaduwela" },
                        { FirstName: "Sharaniya", Salary: 55000, City: "Kaduwela" },
                    ];

                    var countries = [
                        {
                            name: "Sri lanka",
                            cities: [
                              { name: "Colombo" },
                              { name: "Kandy" },
                              { name: "Trinco" }
                            ]
                        },
                        {
                            name: "Australia",
                            cities: [
                              { name: "Victoria" },
                              { name: "Melbourn" },
                              { name: "Sydney" }
                            ]
                        },
                        {
                            name: "UK",
                            cities: [
                              { name: "Chelsey" },
                              { name: "Birmingham" },
                              { name: "London" }
                            ]
                        },
                    ]

                    $scope.employees = employees;
                    $scope.countries = countries;
                }).controller("nginclude", function ($scope) {
                    var employees = [
                        { FirstName: "Tharaka", Salary: 35000.988, City: "Godagama" },
                        { FirstName: "Thushara", Salary: 35000, City: "Kandy" },
                        { FirstName: "Eranda", Salary: 35000, City: "Kaduwela" },
                        { FirstName: "Gihan", Salary: 25000, City: "Kaduwela" },
                        { FirstName: "Sharaniya", Salary: 55000, City: "Kaduwela" },
                    ];

                    $scope.employees = employees;
                    $scope.employeeView = 'ngInclude.html';
                }).controller("nghttp", function ($scope, $http, $log) {

                    var successCallback = function (response) {
                        $scope.locations = response.data;
                        $log.info(response);
                    }

                    var errorCallback = function (reason) {
                        $scope.error = reason.data;
                        $log.info(reason);
                    }

                    $http({
                        method: 'GET',
                        url: 'http://jwappstaging.hypercentdeviceserver.com/api/location?searchtext='
                    })
                    .then(successCallback, errorCallback)
                });

