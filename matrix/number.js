const { random } = require("gsap");

const stdin = process.stdin;
const stdout = process.stdout;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//get random int between min and max
function getRandomInt2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//function that adds between 0 and 10 spaces to the string
function addSpace() {
    let space = "";
    for (let i = 0; i < getRandomInt(10); i++) {
        space += " ";
    }
    process.stdout.write(space);

}

//function that increments spaces in a string between 0 and 10 and then decrements it without interval
function addSpace2() {
    let space = "";
    for (let i = 0; i < getRandomInt(10); i++) {
        space += " ";
    }
    process.stdout.write(space);
    for (let i = 0; i < getRandomInt(10); i++) {
        space = space.slice(0, -1);
    }
    process.stdout.write(space);
}





/* //function that do a console log each 0.001 second for 1 minute
function number() {
     console.log("number");
    let i = 0;
    let interval = setInterval(() => {
        process.stdout.write(i.toString(2) + "");
        i++;
        if (i == 600000) {
            clearInterval(interval);
        }
    }, 0.0000001);  
    while (true) {
        const color = "\x1b[" + getRandomInt2(30,37) + "m" + getRandomInt(2) + "\x1b[89m";
        process.stdout.write("\x1b[0m".toString());
        process.stdout.write(color.toString());
        //process.stdout.write(getRandomInt(2).toString());
        addSpace2();
    }


} */

function number() {
    const interval = setInterval(() => {
        const color = "\x1b[" + 32/* getRandomInt2(30,37) */ + "m" + getRandomInt(2) + "\x1b[89m";
        process.stdout.write("\x1b[0m".toString());
        process.stdout.write(color.toString());
        //process.stdout.write(getRandomInt(2).toString());
        addSpace2();
    }, 100); // 10 millisecondes = 0,01 secondes

    // Arrêter l'exécution après un certain délai (par exemple, 1 minute)
    setTimeout(() => {
        clearInterval(interval); // Arrêter l'appel répété de la fonction
    }, 60000); // 60000 millisecondes = 60 secondes = 1 minute
}


number();


