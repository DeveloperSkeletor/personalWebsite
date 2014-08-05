"use strict";

//a cleaned up version of the date the provides the day, month, and year. Ex: Tuesday July 29th, 2014
function grabDate() {
    
    var day;
    var month;
    var year = new Date().getFullYear();
    var numDay = new Date().getDate();
    
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    
    switch (new Date().getMonth()) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    
     if (numDay == 1 || numDay == 21 || numDay == 31){
        numDay = numDay + "st";
     }else if (numDay == 2 || numDay == 22){
         numDay = numDay + "nd";
     }else if (numDay == 3 || numDay == 23){
         numDay = numDay + "rd";
     }else{
         numDay = numDay + "th";
     }
    
    document.getElementById("date").innerHTML = day + " " + month + " " + numDay + ", " + year;
    
}

//this is a simple countdown clock that will count down to a specified date in the future
// set the date we're counting down to
var target_date = new Date("Aug 15, 2019").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById("countdown");
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = days + "d, " + hours + "h, "
    + minutes + "m, " + seconds + "s";  
 
}, 1000);
