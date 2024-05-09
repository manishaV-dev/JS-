/*

        The switch statement is used to perform different actions based on different conditions.

        syntax - switch(expression) {
                        case x:
                            // code block
                            break;

                        case y:
                            // code block
                        break;

                        default:
                            // code block
                }



*/


const month = 3;

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;

    default:
        console.log('Default Month : May');
        break;
}

// Find whats day is today

let day;
switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;

    case 1:
        day = 'Monday';
        break;

    case 2:
        day = 'Tuesday';
        break;

    case 3:
        day = 'Wednesday';
        break;

    case 4:
        day = 'thursday';
        break;

    case 5:
        day = 'Friday';
        break;

    case 6:
        day = 'Saturday';
        break;

}

console.log(`Today is : ${day}`); // Today is Thursday