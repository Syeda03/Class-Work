var fs= require("fs");

fs.readFile("bank.txt","UTF-8",function(error,total){


if(error){
    return console.log(error);
}

var numbers=[1, 2.33, 4.23, -2, -2, -.25, 5, 10, 5];
for (var i = 0; i < numbers.length; i++) {
    total+= numbers[i]
  }
console.log(total);
});
