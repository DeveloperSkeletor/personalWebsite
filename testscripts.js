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