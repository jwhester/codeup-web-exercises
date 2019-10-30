"use strict";

$(document).ready(function () {
    // //Alerts the h1 elements on page load.
    // var heading = $('h1').html();
    // $(document).ready(function () {
    //     alert(heading);
    // });
    // //changes color of body
    // $('body').css('background-color', 'black');
    // $('.codeup').css('border', '1px solid red');
    //
    // //Changes fonts of list items to 20px.
    // $('li').css('font-size', '20px');
    //
    // //Highlights h1, p, and li tags to orange.
    // $('h1, p, li').css('background-color', 'orange');
    //
    // //heading font size
    // $('#heading').css({'font-size': '50px', 'margin-top': '10%' });
    //
    // //p tag font
    // $('p').css('font-size', '20px');
    //
    // //Collapsible tabs
    // $( function() {
    //     $( "#tabs" ).tabs();
    // } );
    //
    //
    // //centers header
    // $('#head').css('margin-left','15%')

    $('h1').click(function() {
        $(this).css('background-color', 'orange');
    });

    $('p').dblclick(function () {
        $(this).css('font-size', '18px');
    })
    $('li, a').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
});