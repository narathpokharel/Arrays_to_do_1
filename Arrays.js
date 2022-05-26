function pushToFront(x, y) {
    var temp1 = x[0], temp2 = x[1];
    for (var i = 0; i < x.length && temp1 != undefined; i++) {
        x[i+1] = temp1;
        temp1 = temp2;
        temp2 = x[i+2];
    }
    x[0] = y; 
}
console.log(pushToFront(x,y))

function popToFront(x) {
    var returny = x[0];
    for (var i = 1; i < x.length; i++) {
        x[i-1] = x[i];
    }
    x.pop();
    return returny;
}
console.log(popToFront(x))


function insertAt(x, y, index) {
    for (var i = x.length - 1; i >= index; i--) {
        x[i+1] = x[i];
    }
    x[index] = y;
}
console.log(insertAt(x))

