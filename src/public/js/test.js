// アラートを表示
function sayHello() {
    alert("Shioripにようこそ！")
}

// デバッグ
console.log("Hello world");

// 定数と変数
let message = "Hello world";        //「message」という変数を定義し、「Hello world」という値を代入
console.log(message);               // 変数名を使うことで、変数の中の値を使うことができる
document.getElementById("letText").textContent = message;
message = "Good night world";       //変数の値は書き換えることができる
console.log(message);               //中身が変わるので、出力される値も変わる
document.getElementById("letText").textContent = message;

const message2 = "Shiorip";
document.getElementById("constText").textContent = message2;
// message2 = "Have a Good Trip";      //定数の値は書き換えられない
// document.getElementById("constText").textContent = message2;


// データ型
const number = 123;
const number2 = 1.23;
document.getElementById("numberText").textContent = number;
document.getElementById("numberText2").textContent = number2;

const str1 = "Goodmorning";
const str2 = 'Hello world';
const str3 = `${str1} world`;
document.getElementById("strText1").textContent = str1;
document.getElementById("strText2").textContent = str2;
document.getElementById("strText3").textContent = str3;

const bool1 = true;
const bool2 = false;
document.getElementById("boolText1").textContent = bool1;
document.getElementById("boolText2").textContent = bool2;

const nullName = null;
document.getElementById("nullText").textContent = nullName;

let n;
console.log(n);

// typeofによる操作
console.log(typeof 20);
console.log(typeof "str");
console.log(typeof true);
console.log(typeof undefined);


// 演算子
const add = 6 + 2;
document.getElementById("addText").textContent = add;
const sub = 6 - 2;
document.getElementById("subText").textContent = sub;
const mul = 6 * 2;
document.getElementById("mulText").textContent = mul;
const div = 6 / 2;
document.getElementById("divText").textContent = div;

const per = 5 % 2; //5を2で割った余りである1が代入される
document.getElementById("perText").textContent = per;

let inc = 2;
inc++;
document.getElementById("incText").textContent = inc;
let dec = 2;
dec--;
document.getElementById("decText").textContent = dec;

const a = 2;
const b = 2;
const c = 3;
document.getElementById("coText").textContent = (a == b);
document.getElementById("coText2").textContent = (a == c);

const aa = 3;
const bb = -2;
document.getElementById("loText").textContent = (aa == bb);

// 1 === 1 //true
// '1' === 1 //false
// 1 !== 1 //false
// '1' !== 1 //true`;


const aaa = 5;
const bbb = 10;
const nnn = null;

console.log(aaa * 2 === bbb);
document.getElementById("q1").textContent = (aaa * 2) === bbb;

console.log(nnn !== null);
// document.getElementById("q2").textContent = nnn !== null;

// HTMLを操作せず、直接ブラウザに表示するコード
document.getElementById("q1").innerHTML = "<p>Hello</p>";
