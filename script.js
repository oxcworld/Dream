console.log("Червоний")
console.log("Оранжевий")
console.log("Жовтий")
console.log("Зелений")
console.log("Блакитний")
console.log("Синій")    
console.log("Фіолетовий")
a=5;
b=8;
c=4;
d=a*b+c;
console.log(d);
m=39;
m=12
if(m<30&&m>=0) console.log("Перша половина години");
if(m>30&&m<=60) console.log("Друга половина години")
if(m==30) console.log("Половина години");
function rand(){
    return Math.floor(Math.random()*51)+50;
}
for(i=0;i<20;i++){
    console.log(rand());
}
var arr = new Array();
var l=1;
while(l<=1024)
{
    arr.push(l);
    l*=2;
}
    console.log(arr);
    function centernumber(){
        var a = Number(document.getElementById('fir').value);
        var b = Number(document.getElementById('sek').value);
        var c = Number(document.getElementById('thi').value);
        if (a==b||b==c||a==c)alert("Числа не можуть бути рівні")
        else{
        if ((a>b&&a<c)||(a<b&&a>c)) console.log("Середне"+a) 
        else{
        if ((b>a&&b<c)||(b<a&&b>c)) console.log("Середне"+b)
        else
        if((c>b&&c<a)||(c<b&&c>a)) console.log("Середне"+c)
        }}
    }
    function reverseStr(str) {
        return str.split("").reverse().join("");
    }
    function szc(){
        var a = document.getElementById('back').value;
    console.log(reverseStr(a));}
    
    function teles(){
        let fon = document.getElementById('te').value
        if (fon.length>10 || fon.length<10)alert("введені не коректні дані")
        else
        console.log("+38"+fon)
    }

function result(){
    var a = document.getElementById('N').value;
    let counter = 0;
    let array = [];

    for(let i = 100; i < 1000; i++) {
        let sum = 0;
        let string = i.toString().split('');
        string.forEach(char => {
            sum += Number(char);
        });
        if(sum == a) {
            array[counter++] = i;
        }
    }

    console.log(a+"\t"+array);
}
punct4();
function punct4(){
    let array=new Array();
    for(i=0;i<10;i++){
        array.push(rand());
    }
    console.log(array);
    let minInd = 0;
    let maxInd = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[minInd] > array[i])
            minInd = i;
        if(array[maxInd] < array[i])
            maxInd = i;
    }

    console.log("min ="+ array[minInd]+", max ="+ array[maxInd]);

    let a = minInd < maxInd ? minInd : maxInd;
    let b = maxInd > minInd ? maxInd : minInd;
    if(a == b)
        console.log("Найбільший і найменший елементи рівні!");
        else{
    a += 1;
    for(let i = a; i <= b - ((a + (b - a)) / 2); i++) {
        let lastInd = b + a - i - 1;
        let buff = array[i];
        array[i] = array[lastInd];
        array[lastInd] = buff;
    }
    console.log(array);
        }}