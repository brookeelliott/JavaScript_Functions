// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if(count < 0)
    {
        count = count * -1;
    }
    
    for(i = 1; i <= count; i++) {
        if(i % 2 != 0)
        {
            console.log(i);
        }
    }

    return;
}

printOdds(-15);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    
    if(userName == null || age == null)
    {
        return console.log("incomplete data given, please give a name and an age");
    }
    
    let aboveSizteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age < 16)
    {
        return console.log(belowSixteen);
    } else {
        return console.log(aboveSizteen);
    }
}

checkAge("Rebecca", 16);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function Quadrant(x, y) {

    if(x > 0 && y > 0)
    {
       return console.log(`(${x}, ${y}) is in quadrant 1`);
    } else if (x < 0 && y > 0) {
       return console.log(`(${x}, ${y}) is in quadrant 2`);
    } else if (x < 0 && y < 0) {
        return console.log(`(${x}, ${y}) is in quadrant 3`);
    } else if (x > 0 && y < 0) {
       return console.log(`(${x}, ${y}) is in quadrant 4`);
    } else if (x == 0 && y != 0) {
       return console.log('This is on the y axis');
    } else if (y == 0 && x != 0) {
       return console.log('This is on the x axis');
    } else {
       return console.log('0, 0 is the center point')
    }
}

Quadrant(1,2);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function Triangle(side1, side2, side3) {
    if(side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1)
    {
        return console.log("This is not a valid triangle");
    }
    if (side1 == side2 && side1 == side3)
    {
        return console.log('equilateral');
    } else if ( side1 == side2 || side2 == side3 || side1 == side3)
    {
        return console.log("isosceles")
    } else {
        return console.log('scalene');
    }
}

Triangle(1,2,2);