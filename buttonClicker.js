// function background(){
//     setTimeout(function(){
//         self.style.backgroundColor = grey;
//     100);
//     }

console.log("wazam")

var bodycolor = document.getElementsByTagName("body")[0]
setTimeout(function () { bodycolor.style.backgroundColor = 'gray' }, 3000);

function red() {

    document.body.style.backgroundColor = 'red'
    setTimeout(function () { bodycolor.style.backgroundColor = 'gray' }, 3000);

}

function notRed() {

    document.body.style.backgroundColor = 'green'
    setTimeout(function () { bodycolor.style.backgroundColor = 'gray' }, 3000);

}

function definitelyNotRed() {

    document.body.style.backgroundColor = 'blue';
    setTimeout(function () { bodycolor.style.backgroundColor = 'gray' }, 3000);

}