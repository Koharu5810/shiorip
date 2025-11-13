<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>天気API練習</title>
</head>
<body>

    {{-- <button id="hello-button" type="button">TSテスト</button>
    <div id="hello-result"></div> --}}

    {{-- <div>現在の気温</div> --}}
    {{-- <div id="weather-result">　天気を取得中...</div> --}}
    {{-- <div id="weather-result_location">　現在地の気温を取得中...</div> --}}

    <div class="weather-search" style="margin-top: 100px">
        <h2>任意の場所の天気を調べる</h2>

        <div>
            <label for="place-input">地名</label>
            <input id="place-input" type="text" placeholder="地名を入力" />

            <button id="place-search-button" type="button">
                天気を検索
            </button>
        </div>

        <ul id="place-candidates" style="margin-top: 30px"></ul>
        <div id="place-weather-result">
            ここに結果が表示されます
        </div>
    </div>

    @vite(['resources/css/weather.css', 'resources/js/weather.ts'])

</body>
</html>
