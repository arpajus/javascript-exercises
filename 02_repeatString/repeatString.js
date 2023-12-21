const repeatString = function(string, num) {
if(num<0) return "ERROR";
let finalReturn="";
for(let i=0; i<num; i++){
    finalReturn=finalReturn+string;
}
return finalReturn;
};

// Do not edit below this line
module.exports = repeatString;
