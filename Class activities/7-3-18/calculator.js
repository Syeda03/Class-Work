var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];

if (operator==="add"){
    c = a + b;
    console.log(c);
}

else if (operator === "subtract"){
    c = a - b;
    console.log(c);
}
