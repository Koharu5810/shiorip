const firstPokemon = ["ニャオハ", "ホゲータ", "クワッス"];
console.log(firstPokemon);
console.log(firstPokemon[1]);

const questions = [
    "現在の日本の総理大臣の名前は？",
    "令和7年は西暦でいうと何年？",
    "最も人口が多い国はどこ？",
];
for (let index = 0; index < questions.length; index++) {
    console.log(questions[index]);
}

let isLogin = false;
if (!isLogin) {
    //以下と同じ
}
if (isLogin === false) {
    // alert("ログインしてください");
} else {
    console.log("ログイン成功");
}

const myMoney = 1000;
let isShipping = false;
if (myMoney >= 500) {
    isShipping = true;
}
console.log(isShipping);


// 関数
// 例）お好み焼きのレシピ
// function okonomiyaki () {
    // 1.キャベツを切る
    // 2.小麦粉を水で溶く
    // 3.１と２を合わせる
    // 4.フライパンで焼く
// }
// okonomiyaki();  // ここで呼び出して実行

function changeDarkMode () {
    if (new Date().getHours() > 20) {
        document.body.style.backgroundColor = "#000";
    }
}
changeDarkMode();

// function 関数名 (引数) {
    // 既存のokonomiyakiという関数の処理に具材や処理（フライパンに油を引く）を加えたいときに、
    // その関数を使って新たな処理を加えるときなどに使用
//}

// 引数を使って冬場は背景色を変える時間を早める処理
// function changeDarkMode(time) {
//     if (new Date().getHours() > time) {
//         document.body.style.backgroundColor = "#000";
//     }
// }
// if (season === "winter") {
//     changeDarkMode(18);
// } else {
//     changeDarkMode(20);
// }

// 複数の処理を引数に渡す
function changeDarkMode(time, color) {
    if (new Date().getHours() > time) {
        document.body.style.backgroundColor = color;
    }
}
changeDarkMode(20, "#333");

// 引数にデフォルト値を設定
function changeDarkMode(time = 20, color = "#333") {
    if (new Date().getHours() > time) {
        document.body.style.backgroundColor = color;
    }
}
changeDarkMode();  // time = 20 と color = "#333" のデフォルト値が適用

// 引数にはオブジェクトを設定することもできる
// function changeDarkMode(obj) {
//     if (new Date().getHours() > obj.time) {
//         document.body.style.backgroundColor = obj.color;
//     }
// }
// changeDarkMode({
//     time: 20,
//     color: "#333",
// });


// 戻り値
function getSeason() {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5) {
        return "spring";
    } else if (month >= 6 && month <= 8) {
        return "summer";
    } else if (month >= 9 && month <= 11) {
        return "autumn";
    } else {
        return "winter";
    }
}
const season = getSeason();
console.log(season);

if (season === "winter") {
    changeDarkMode(18);
} else {
    changeDarkMode(20);
}

// スコープ
const bar = 1;   // グローバル変数
function foo() {
    const bar2 = 2;  // ローカル変数
    console.log(bar2);
}
console.log(bar);  // 1が表示される
// console.log(bar2);  // エラーになる
foo();

// ローカルとグローバルで同じ変数を定義することができる
const bar1 = 1;
function foo2() {
    const bar1 = 2;  // 2が表示される
    console.log(bar1);
}
console.log(bar1);  // 1が表示される
foo2();

const sonicBoom = () => {
    return 20;
}
console.log(sonicBoom());

// const damage = 20;
function metalBurst(lastDamage) {
    // return lastDamage = damage * 1.5;
    return lastDamage * 1.5;
}
console.log(metalBurst(50));

function horDrill(theirHp) {
    if (Math.random() <= 0.3) {
        return theirHp;
    } else {
        return 0;
    }
}
console.log(horDrill(50));


// オブジェクト
// const オブジェクト名 = {
//     プロパティ名: 値;
// }
const snsUser = {
    id: 1,
    userName: "Taro",
    gender: "male",

    // オブジェクトには関数をもたせることもできる
    // この場合の関数をメソッドと呼ぶ
    like: function() {
        console.log("Like!");
    },
    post: function() {
        console.log("お腹へった");
    },
}
console.log(snsUser.userName);
console.log(snsUser.like());
console.log(snsUser.post());


const pikachu = {
    name: "ピカチュウ",
    level: 18,
    types: [
        "でんき",
    ],
    skills: [
        "10万ボルト",
        "でんこうせっか",
        "たいあたり",
    ],
    levelUp: function () {
        this.level++;
        if (this.level >= 20) {
            this.skills.push("スパーク");
        }
    }
}
// console.log(pikachu.skills);
// console.log(pikachu.level);
// これをまとめたコンソール
console.log("1st Pikachu:", pikachu.level, pikachu.skills);
pikachu.levelUp();
console.log("2nd Pikachu:", pikachu.level, pikachu.skills);
pikachu.levelUp();
console.log("3rd Pikachu:", pikachu.level, pikachu.skills);


myPokemons = [
    "サンダー", "ホウオウ", "スイクン", "ラティアス", "パルキア",
];
console.log(myPokemons);
myPokemons.push("ミュウツー");
console.log(myPokemons);
console.log(myPokemons.length);

const oldVersions = ["赤", "緑", "青"];
const newVersions = ["ルビー", "サファイア", "エメラルド"];
// const totalVersions = oldVersions.concat(newVersions);
// console.log(totalVersions);
console.log(oldVersions.concat(newVersions));


console.log("処理開始");

setTimeout(() => {
    console.log("タイマー完了"); // 2秒後に実行される
}, 2000);

console.log("処理終了");


// 非同期処理にコールバックを使う例
function getUserData(userId, callback) {
  console.log("データを取得中...");

  // 非同期処理（APIリクエストを想定）
  setTimeout(() => {
    const user = {
      id: userId,
      name: "山田太郎",
      email: "yamada@example.com"
    };

    // 処理完了後にコールバックを呼び出す
    callback(user);
  }, 4000);
}
getUserData(123, (user) => {
  console.log("取得完了!");
  console.log(user);
});
console.log("他の処理を実行中...");


// Promiseチェーンの例
// fetchUserProfile(123)
//   .then(user => {
//     console.log("ユーザー:", user);
//     return fetchPosts(user.id); // 次のPromiseを返す
//   })
//   .then(posts => {
//     console.log("投稿一覧:", posts);
//     return fetchComments(posts[0].id); // さらに次のPromiseを返す
//   })
//   .then(comments => {
//     console.log("コメント:", comments);
//   })
//   .catch(error => {
//     // チェーン内のどこかでエラーが発生した場合に実行される
//     console.error("エラー:", error);
//   });

const messageAfter3s = new Promise((resolve) => {
    setTimeout(() => {
        resolve("完了しました！");
    }, 9000);
});
messageAfter3s
    .then((message) => {
        console.log(message);
    });
// new Promise((resolve, reject) => {...})
// → 非同期処理を作るときの基本形。

// setTimeout で3秒後に resolve を呼び出す
// → resolve に渡した値は .then() の引数に渡る。

// .then() で結果を受け取って表示。


// async/awaitに書き換え
// fetchUserData(123)
//     .then((user) => fetchOrders(user.id))
//     .then((orders) => displayOrders(orders))
//     .catch((error) => showError(error));

// 自分の回答
// async function fetchUserData() {
//     try {
//         const user = await fetchUserData(123);
//         console.log("ユーザー:", user);

//         const orders = await displayOrders(user.id);
//         console.log("注文:", orders);

//     } catch (error) {
//         console.error("エラー", error);
//     }
// }

// chatGPTの回答
// async function showUserOrders() {
//     try {
//         const user = await fetchUserData(123);
//         const orders = await fetchOrders(user.id);
//         displayOrders(orders);
//     } catch (error) {
//         showError(error);
//     }
// }
// showUserOrders();
