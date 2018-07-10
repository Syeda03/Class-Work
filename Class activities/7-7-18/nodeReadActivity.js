var fs= require("fs");

fs.readFile("best_things_ever.txt","UTF-8",function(error,data){


if(error){
    return console.log(error);
}
var output = data.split(",");
output = data+output;
console.log(output[i]);
}
});