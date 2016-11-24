/// <reference path="customScript.js" />

myApp.factory('stringService', function () {
    return {
        processString: function (input) {
            if (!input) {
                return input;
            }

            var output = "";

            for (var c = 0; c < input.length; c++) {
                if (c > 0 && input[c] == input[c].toUpperCase()) {
                    output = output + " ";
                }

                output = output + input[c];
            }

            return output;
        }
    }
});