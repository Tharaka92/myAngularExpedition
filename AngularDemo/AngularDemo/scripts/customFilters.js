﻿/// <reference path="customScript.js" />

myApp.filter("getGender", function () {
    return function (gender) {
        switch (gender) {
            case 1:
                return "Male";
            case 2:
                return "Female"
            case 3:
                return "Non disclosable"
        }
    }
})