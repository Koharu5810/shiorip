<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://unpkg.com/dayjs"></script>                     <!-- cdn読み込み -->
    <script src="https://unpkg.com/dayjs@1.7.7/locale/ja.js"></script>  <!-- 日本語に対応させるパッケージ読み込み -->
    <link rel="stylesheet" href="css/sanitize.css">
    <title>JSテストページ</title>
</head>
<body>
    <h1>JavaScriptテスト</h1>

    {{-- <button onclick="sayHello()">クリックして挨拶</button> --}}

    <h3 style="margin-top: 50px;">変数と定数</h3>
    <div id="letText"></div>
    <div id="constText"></div>


    <h3 style="margin-top: 50px">データ型</h3>
    {{-- number --}}
    <div id="numberText"></div>
    <div id="numberText2"></div>

    {{-- string --}}
    <div id="strText1"></div>
    <div id="strText2"></div>
    <div id="strText3"></div>

    {{-- boolean型 --}}
    <div id="boolText1"></div>
    <div id="boolText2"></div>

    {{-- null --}}
    <div id="nullText"></div>


    <h3 style="margin-top: 50px">演算子</h3>
    {{-- 算術演算子 --}}
    <div id="addText"></div>
    <div id="subText"></div>
    <div id="mulText"></div>
    <div id="divText"></div>

    {{-- 余剰 --}}
    <div id="perText"></div>

    {{-- インクリメントとデクリメント --}}
    <div id="incText"></div>
    <div id="decText"></div>

    {{-- 比較的演算子 --}}
    <div id="coText"></div>
    <div id="coText2"></div>

    {{-- 論理演算子 --}}
    <div id="loText"></div>

    {{-- 演算子問題 --}}
    <div>問題回答</div>
    <div id="q1"></div>


    <h3 style="margin-top: 50px">条件分岐</h3>
    {{-- if文 --}}
    <div id="ifText"></div>
    <div id="quantityText"></div>

    {{-- 条件分岐問題 --}}
    <div><strong>問題回答</strong></div>
    <div id="q3"></div>
    <div id="q4-1"></div>
    <div id="q4-2"></div>
    <div id="q4-3"></div>
    <div id="q5"></div>
    <div id="q6"></div>


    <h3 style="margin-top: 50px">配列</h3>
    {{-- if文 --}}
    <div id="arrayText"></div>
    <div id="arrayText2"></div>
    <div id="arrayText3"></div>
    <div id="arrayText4"></div>
    <div id="arrayText5"></div>
    <div id="arrayText6"></div>

    <div id="array2Text"></div>
    <div id="array3Text"></div>


    <h3 style="margin-top: 50px">繰り返し</h3>
    {{-- for文 --}}
    <div id="roup1"></div>
    <div id="roup2"></div>
    <div id="roup3"></div>


    <h3 style="margin-top: 50px">文字列</h3>
    {{-- 文字列 --}}
    <div id="text1" style="white-space: pre;"></div>
    <div id="text2"></div>


    <h3 style="margin-top: 50px">スケジュール</h3>
    <div id="schedule"></div>


    <h3 style="margin-top: 50px">イベント</h3>
    {{-- click --}}
    {{-- <button>ボタン</button> --}}

    <h1 class="red">クラス名は「red」です</h1>
    <h2 class="blue">クラス名は「blue」です</h2>
    <button>ボタン</button>



    <script src="./js-test.js"></script>
</body>
</html>
