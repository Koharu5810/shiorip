import './bootstrap';

console.log("app.ts loaded");

// const button = document.querySelector<HTMLButtonElement>("#hello-button");
// const result = document.querySelector<HTMLDivElement>("#hello-result");

// if (!button) {
//     console.warn("ボタン要素が見つかりません (#hello-button)");
// }
// if (!result) {
//     console.warn("結果表示用の要素が見つかりません (#hello-result)");
// }

// if (button && result) {
//     button.addEventListener("click", () => {
//         result.textContent = "TypeScript からこんにちは！";
//     });
// }

// 東京の天気
async function getWeatherTokyo() {
    try {
        const url =
            "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true";
        // ↑東京の気温。latitude：緯度、longitude：経度

        const response = await fetch(url);
        const data = await response.json();

        console.log("天気API結果:", data);

        const div = document.querySelector<HTMLDivElement>("#weather-result");
        if (div) {
            div.textContent = `　東京: ${data.current_weather.temperature}℃`;
        }
    } catch (error) {
        console.log("天気APIエラー:", error);
    }
}

// Open-Meteo の Reverse Geocoding APIを利用し現在地名取得
async function getPlaceName(lat: number, lon: number):Promise<string> {
    const url = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&language=ja`;

    const response = await fetch(url);
    const data = await response.json();

    // 結果が存在すれば表示
    if (data.results && data.results.length > 0) {
        const place = data.results[0];
        return `${place.admin1} ${place.name}`;
    }

    return "不明な場所";
}

// 現在地の天気
async function getWeatherByLocation(lat: number, lon: number) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("現在地の天気API結果:", data);

        const placeName = await getPlaceName(lat, lon);

        const result = document.querySelector<HTMLDivElement>('#weather-result_location');
        if (result) {
            result.textContent = `　${placeName}: ${data.current_weather.temperature}℃`;
        }
    } catch (error) {
        console.log("現在地の天気APIエラー:", error);
    }
}
// JavaScript の geolocation API を使用
function requestUserLocation() {
    if (!navigator.geolocation) {
        alert("現在地情報が取得できません");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            console.log("現在地：", lat, lon);

            getWeatherByLocation(lat, lon);
        },
        (err) => {
            console.log("位置情報取得エラー:", err);
            alert("位置情報の取得が許可されませんでした");
        }
    );
}

document.addEventListener("DOMContentLoaded", () => {
    getWeatherTokyo();
    requestUserLocation();
});
