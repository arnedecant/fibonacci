/// <reference path="jquery.js" />

$(document).ready(function () {
    var btn = $("#generate");
    var result = $("#result");

    btn.click(function () {
        var eind = $("#getal").val();
        result.append("<ul>");

        var first = 0;
        var second = 1; 
        var current = 0 ;

        for (var i = 0; i < eind; i++) {
            result.append("<li>" + current + "</li>");

            current = first + second;
            second = first;
            first = current;
        }
        result.append("</ul>");
    });

});