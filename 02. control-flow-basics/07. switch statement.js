//switch statements

const grade = 'B';

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

const marks = 'D';

switch(marks){
    case 'A':
        console.log('you got an A!');
    case 'B':
        console.log('you got a B!');
    case 'C':
        console.log('you got a C!');
    case 'D':
        console.log('you got a D!');
    case 'E':
        console.log('you got an E!');
    default:
        console.log('not a valid grade');
}