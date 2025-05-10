<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/sanitize.css">
    <title>JSテストページ</title>
</head>
<body>
    <h1>JavaScriptテスト</h1>

    <button onclick="sayHello()">クリックして挨拶</button>

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


    <script src="/js/test.js"></script>
</body>
</html>
