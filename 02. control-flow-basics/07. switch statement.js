//switch statements

const grade = 'C';

//using if statements

if (grade === 'A'){
    console.log ('student scored A')
    
} else if (grade === 'B' ){
    console.log ('student scored B')
    
} else if (grade === 'C' ){
    console.log ('student scored C')
    
} else if (grade === 'D' ){
    console.log ('student scored D')
    
} else if (grade === 'E' ){
    console.log ('student scored E')
    
} else {
    console.log ('not a valid grade')
}


//the switch statement

const marks = 'B';

switch(marks){
    case 'A':
        console.log('you got an A!');
        break;

    case 'B':
        console.log('you got a B!');
        break;

    case 'C':
        console.log('you got a C!');
        break;

    case 'D':
        console.log('you got a D!');
        break;

    case 'E':
        console.log('you got an E!');
        break;

    default:
        console.log('not a valid grade');
}

// the switch statement uses strict equality, checks the type and actual value including case sensitive

//the break clause helps to execute the code up to that point, no need of break clause after the default case.