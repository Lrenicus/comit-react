var weekdayNumber = 3
var message = "";

switch (weekdayNumber) {
    case 1:
        message = 'Weekday: Sunday';
        break;
    case 2:
        message = 'Weekday: Monday';
        break;
    case 3:
        message = 'Weekday: Tuesday';
        break;
    case 4:
        message = 'Weekday: Wednesday';
        break;   
    case 5:
        message = 'Weekday: Thursday';
        break;
    case 6:
        message = 'Weekday: Friday';
        break;
    case 7:
        message = 'Weekday: Saturday';
        break;  
    default:
        message = 'Error: Number not between 1-7';
        break;           
}

console.log(message);