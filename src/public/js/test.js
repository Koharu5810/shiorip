// アラートを表示
function sayHello() {
    alert("Shioripにようこそ！")
}

// HTMLを操作せず、直接ブラウザに表示するコード
document.getElementById("q1").innerHTML = "<p>Hello</p>";

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


// 条件分岐
const price = 1800;

if (price < 1000) {
    document.getElementById("ifText").textContent = "安い";
} else if (price > 2000) {
    document.getElementById("ifText").textContent = "高い";
} else {
    document.getElementById("ifText").textContent = "丁度いい";
}

const quantity = 400;
const banana = quantity <= 300 ? "少ない" : "多い";
document.getElementById("quantityText").textContent = banana;

const person = 3;
switch (person) {
    case 1:
        console.log("太郎さん");
        break;
    case 2:
        console.log("次郎さん");
        break;
    case 3:
        console.log("三郎さん");
        break;
    case 4:
        console.log("四郎さん");
        break;
    case 5:
        console.log("五郎さん");
        break;
}

const price1 = 1000;
const tax = 10;
document.getElementById("q3").textContent = price * tax;

const scoreA = 80 + 90 + 60 +85 + 100;
const scoreB = 40 + 30 + 50 + 25 + 60;
console.log(scoreA);
document.getElementById("q4-1").textContent = scoreA;
console.log(scoreB);
document.getElementById("q4-2").textContent = scoreB;

if (scoreA > 300 && scoreB > 300) {
    document.getElementById("q4-3").textContent = "素晴らしい";
} else if (scoreA > 300 || scoreB > 300) {
    document.getElementById("q4-3").textContent = "普通";
} else {
    document.getElementById("q4-3").textContent = "頑張ろう";
}


const omikuji = Math.floor(Math.random() * 7) + 1;  // 1~7の乱数
switch (omikuji) {
    case 1:
        document.getElementById("q5").textContent = "大吉";
        break;
    case 2:
        document.getElementById("q5").textContent = "中吉";
        break;
    case 3:
        document.getElementById("q5").textContent = "小吉";
        break;
    case 4:
        document.getElementById("q5").textContent = "吉";
        break;
    case 5:
        document.getElementById("q5").textContent = "末吉";
        break;
    case 6:
        document.getElementById("q5").textContent = "凶";
        break;
    case 7:
        document.getElementById("q5").textContent = "大凶";
        break;
}

const price3 = 1800;
// const order = (price3 <= 1000) ? "安い" : "高い";
// document.getElementById("q6").textContent = order;
const result = (price3 < 1000) ? "安い" : (price3 > 2000) ? "高い" : "ちょうどいい";
document.getElementById("q6").textContent = result;


// 配列
const array = ["太郎", "次郎", "三郎", "四郎", "五郎"];
document.getElementById("arrayText").textContent = array;
document.getElementById("arrayText2").textContent = array[0];
document.getElementById("arrayText3").textContent = array[1];
document.getElementById("arrayText4").textContent = array[2];
document.getElementById("arrayText5").textContent = array[3];
document.getElementById("arrayText6").textContent = array[4];

const array2 = ["太郎", "次郎", "三郎", "四郎", "五郎"];
array2[1] = "二郎";
document.getElementById("array2Text").textContent = array2;

const array3 = ["太郎", "次郎", "三郎", "四郎", "五郎"];
document.getElementById("array3Text").textContent = array3.length


const array4 = ["太郎", "次郎", "三郎", "四郎", "五郎"];

array.push("六郎"); //末尾に追加
array.unshift("一郎"); //先頭に追加
console.log(array);

array.pop(); //末尾を削除
array.shift(); //先頭を削除
console.log(array);

array.splice(1, 3); //２番目（次郎）から3つ削除
console.log(array);


const array5 = ["a", "b", "c"];
console.log(array5);
const newArray = array5.concat(["d", "e"]);
console.log(newArray);


const array6 = ["a", "b", "c"];

// スプレッド構文を使った場合
const newArray2 = ["x", "y", "z", ...array6];
console.log(newArray2);

// concatの場合
const newArrayConcat = ["x", "y", "z"].concat(array6);
console.log(newArrayConcat);

// スプレッド構文を利用した配列の中途展開
const array7 = ["a", "b", "c"];
const newArray3 = ["x", ...array7, "z"];
console.log(newArray3);


const array8 = ["HTML", "CSS", "JavaScript", "PHP"];
const indexOfJS = array8.indexOf("JavaScript");
console.log(indexOfJS);
console.log(array8[indexOfJS]);
// Ruby という要素はないため -1 が返される
console.log(array8.indexOf("Ruby"));


const array9 = [10, 30, 5, 40];
const found = array9.find(function (element) {
    return element > 20;
});
console.log(found);


const array10 = ["a", "b", "c", "d", "e"];
// インデックスから2番目から5番目の直前の範囲を取り出す
console.log(array10.slice(1, 4));
// 第二引数を省略した場合は、第一引数から末尾の要素までを取り出す
console.log(array10.slice(1));


const array11 = ["HTML", "CSS", "JavaScript", "PHP"];
const indexOfJS2 = array11.indexOf("JavaScript");
if (indexOfJS2 !== -1) {
    console.log("配列にJavaScriptが含まれています");
} else {
    console.log('配列には含まれていません');
}


const array12 = ["太郎", "次郎", "三郎", "四郎", "五郎"];

array12.forEach(function (item, index) {
    if (item == "三郎") {
        console.log(`${item}は${index}番目の要素です`);
    }
});

const array13 = [8, 10, 5, 3, 2];
const result13 = array13.map(function (item) {
    return item * 2;
});
console.log(result13);

const array14 = [8, 10, 5, 3, 2];
const result14 = array14.filter(function (item) {
    return item % 2 === 1;
});
console.log(result14);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers2 = numbers.map(function (item) {
//     return item % 2 === 0;
// });
const numbers2 = numbers.map(function (item) {
    if (item % 2 == 0) {
        return item * 2;
    }
    return item;
});
console.log(numbers2);


// let customer = ["佐藤", "田中", "鈴木"]
// const customer = name.map(function (item) {
//     return item"様",
// });
const customer = [];
const name = ["佐藤", "田中", "鈴木"];
console.log(customer);
console.log(name);

const resultt = name.map(function (item) {
    return item + "様";
});

customer.push(resultt);
console.log(customer);


let array20 = ["魚", "肉", "肉", "魚"];
// let food = array20.indexOf("魚", "肉");
// const result20 = array20.filter(function (item) {
//     return item;
// });
const result20 = array20.filter(function (ele, i) {
    return array20.indexOf(ele) === i;
});
console.log(result20);

// ↓解説
// 🔹 filter() の仕組み
// filter は配列の中を順番にチェックして「true を返した要素だけ残す」メソッド。
// 🔹 indexOf(ele) の意味
// array20.indexOf(ele) は、その要素が最初に現れるインデックスを返します。
// 🔹 array20.indexOf(ele) === i の意味
// 現在のループ位置 i が、その要素の「最初の出現位置」と一致するときだけ true にする
// → 重複して2回目以降に出てきたものは false になる → 除外される！
