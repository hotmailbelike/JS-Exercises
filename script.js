/* JavaScript code here */
console.log("Police");

var arr = [2,4,6,8];

var sum = (a) => {
    var x=0;
    for(var i=0;i<a.length;i++){
        x+=a[i];
    }
    return x;
};

console.log(sum(arr));