import './bootstrap';
console.log("app.ts loaded");

type WeatherLocation = {
    name: string;
    state?: string;
    country?: string;
    lat: number;
    lon: number;
};
type WeatherData = {
    temp: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    humidity?: number;
    pressure?: number;
    description?: string;
    icon?: string;
    wind_speed?: number;
};

// Laravel APIを叩く関数
async function apiSearchLocations(query: string): Promise<WeatherLocation[]> {
    const res = await fetch(
        `/api/weather/search?query=${encodeURIComponent(query)}`
    );
    if (!res.ok) {
        throw new Error(`検索APIエラー: ${(res.status)}`);
    }
    const json = await res.json();
    return json.data as WeatherLocation[];
}
async function apiGetCurrentWeather(lat: number, lon: number): Promise<WeatherData> {
    const res = await fetch(`/api/weather/current?lat=${lat}&lon=${lon}`);
    if (!res.ok) {
        throw new Error(`天気APIエラー: ${res.status}`);
    }
    const json = await res.json();
    return json.data as WeatherData;
}

type WeatherSearchOptions = {
    inputSelector: string;
    buttonSelector: string;
    candidatesSelector: string;
    resultSelector: string;
}

export function setupWeatherSearchComponent(options: WeatherSearchOptions) {
    const input = document.querySelector<HTMLInputElement>(options.inputSelector);
    const button = document.querySelector<HTMLButtonElement>(options.buttonSelector);
    const list = document.querySelector<HTMLUListElement>(options.candidatesSelector);
    const resultDiv = document.querySelector<HTMLDivElement>(options.resultSelector);

    if (!input || !button || !list || !resultDiv) {
        console.warn("天気検索コンポーネントの要素が見つかりません");
        return;
    }

    const setResult = (text: string) => {
        resultDiv.textContent = text;
    };

    const clearCandidates = () => {
        list.innerHTML = "";
    };

    const renderCandidates = (locations: WeatherLocation[]) => {
        clearCandidates();

        console.log("locations:", locations);

        locations.forEach((loc) => {
            const li = document.createElement("li");
            const labelParts = [
                loc.name,
                loc.state ? `(${loc.state})` : "",
                // loc.country ? `[${loc.country}]` : "",
            ].filter(Boolean);

            li.textContent = labelParts.join("");
            li.style.cursor = "pointer";

            li.addEventListener("click", async () => {
                try {
                    setResult("天気を取得中...");
                    const weather = await apiGetCurrentWeather(loc.lat, loc.lon);

                    const locationLabel = labelParts.join("");

                    setResult(
                        `${locationLabel} の現在の天気:
                        気温: ${weather.temp}℃（体感 ${weather.feels_like ?? "-"}℃）
                        説明: ${weather.description ?? "-"}
                        湿度: ${weather.humidity ?? "-"}%
                        風速: ${weather.wind_speed ?? "-"} m/s`
                        );
                } catch (err) {
                    console.error(err);
                    setResult("天気の取得中にエラーが発生しました。");
                }
            });

            list.appendChild(li);
        });
    };

    const handleSearch = async () => {
        const query = input.value.trim();
        if (!query) {
            setResult("地名を入力してください。");
            clearCandidates();
            return;
        }

        try {
            setResult("検索中...");
            clearCandidates();

            const locations = await apiSearchLocations(query);

            if (!locations.length) {
                setResult(`「${query}」が見つかりませんでした。`);
                return;
            }

            setResult("候補を選択してください。");
            renderCandidates(locations);
        } catch (err) {
            console.error(err);
            setResult("位置情報の取得中にエラーが発生しました。");
        }
    };

    button.addEventListener("click", handleSearch);

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    });
}


// 東京の天気（open-meteo）
// async function getWeatherTokyo() {
//     try {
//         const url =
//             "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true";
//         // ↑東京の気温。latitude：緯度、longitude：経度

//         const response = await fetch(url);
//         const data = await response.json();

//         console.log("天気API結果:", data);

//         const div = document.querySelector<HTMLDivElement>("#weather-result");
//         if (div) {
//             div.textContent = `　東京: ${data.current_weather.temperature}℃`;
//         }
//     } catch (error) {
//         console.log("天気APIエラー:", error);
//     }
// }

// Open-Meteo の Reverse Geocoding APIを利用し現在地名取得
// async function getPlaceName(lat: number, lon: number):Promise<string> {
//     const url = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&language=ja`;

//     const response = await fetch(url);
//     const data = await response.json();

//     // 結果が存在すれば表示
//     if (data.results && data.results.length > 0) {
//         const place = data.results[0];
//         return `${place.admin1} ${place.name}`;
//     }

//     return "不明な場所";
// }

// 現在地の天気（open-meteo）
// async function getWeatherByLocation(lat: number, lon: number) {
//     try {
//         const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

//         const response = await fetch(url);
//         const data = await response.json();

//         console.log("現在地の天気API結果:", data);

//         const placeName = await getPlaceName(lat, lon);

//         const result = document.querySelector<HTMLDivElement>('#weather-result_location');
//         if (result) {
//             result.textContent = `　${placeName}: ${data.current_weather.temperature}℃`;
//         }
//     } catch (error) {
//         console.log("現在地の天気APIエラー:", error);
//     }
// }
// JavaScript の geolocation API を使用（open-meteo）
// function requestUserLocation() {
//     if (!navigator.geolocation) {
//         alert("現在地情報が取得できません");
//         return;
//     }

//     navigator.geolocation.getCurrentPosition(
//         (pos) => {
//             const lat = pos.coords.latitude;
//             const lon = pos.coords.longitude;
//             console.log("現在地：", lat, lon);

//             getWeatherByLocation(lat, lon);
//         },
//         (err) => {
//             console.log("位置情報取得エラー:", err);
//             alert("位置情報の取得が許可されませんでした");
//         }
//     );
// }


interface GeocodingResult {
    name: string;     // 都市名・地名
    admin1?: string;  // 都道府県レベル（あれば）
    country?: string;
    latitude: number;
    longitude: number;
}
interface GeocodingResponse {
    results?: GeocodingResult[];
}

// 地名（1箇所）を検索して表示
// async function searchPlaceAndGetWeather(placeName: string) {
//     const resultDiv = document.querySelector<HTMLDivElement>("#place-weather-result");

//     if (!placeName.trim()) {
//         if (resultDiv) {
//             resultDiv.textContent = "地名を入力してください。";
//         }
//         return;
//     }

//     try {
//         // 1. 地名から緯度経度を取得
//         const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
//             placeName
//         )}&language=ja&count=5`;

//         const geoResponse = await fetch(geoUrl);
//         if (!geoResponse.ok) {
//             throw new Error(`ジオコーディングAPIエラー: ${geoResponse.status}`);
//         }

//         const geoData: GeocodingResponse = await geoResponse.json();

//         if (!geoData.results || geoData.results.length === 0) {
//             if (resultDiv) {
//                 resultDiv.textContent = `「${placeName}」が見つかりませんでした。`;
//             }
//             return;
//         }

//         // 最初の候補を採用
//         const place = geoData.results[0];
//         const lat = place.latitude;
//         const lon = place.longitude;

//         console.log("ジオコーディング結果:", place);

//         // 2.緯度経度から天気を取得
//         const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

//         const weatherResponse = await fetch(weatherUrl);
//         if (!weatherResponse.ok) {
//             throw new Error(`天気APIエラー: ${weatherResponse.status}`);
//         }

//         const weatherData = await weatherResponse.json();
//         console.log("任意地点の天気API結果:", weatherData);

//         // 表示用の地名
//         const displayNameParts = [
//             place.admin1 ?? "",
//             place.name,
//             // place.country ? `(${place.country})` : "",
//         ].filter(Boolean);

//         const displayName = displayNameParts.join(" ");

//         if (resultDiv) {
//             resultDiv.textContent = `${displayName}の現在の気温: ${weatherData.current_weather.temperature}℃`;
//         }
//     } catch (error) {
//         console.error(error);
//         if (resultDiv) {
//             resultDiv.textContent = "天気の取得中にエラーが発生しました。";
//         }
//     }
// }

// 地名（重複箇所）を検索して表示
// async function searchPlace(placeName: string) {
//     const list = document.querySelector<HTMLUListElement>("#place-candidates");
//     const resultDiv = document.querySelector<HTMLDivElement>("#place-weather-result");

//     if (!list || !resultDiv) return;
//     list.innerHTML = "";
//     resultDiv.textContent = "";

//     const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
//         placeName
//     )}&language=ja&count=10`;

//     const geoResponse = await fetch(geoUrl);
//     const geoData: GeocodingResponse = await geoResponse.json();

//     console.log("ジオコーディング結果:", geoData.results);

//     if (!geoData.results || geoData.results.length === 0) {
//         resultDiv.textContent = `「${placeName}」 が見つかりませんでした。`;
//         return;
//     }

//     // 重複除外
//     const uniqueResults: GeocodingResult[] = [];
//     const seenKeys = new Set<string>();

//     for (const place of geoData.results) {
//         const key = `${placeName}_${place.admin1 ?? ""}_${place.country ?? ""}`;
//         if (seenKeys.has(key)) {
//             continue;  // すでに同じ候補があるのでスキップ
//         }
//         seenKeys.add(key);
//         uniqueResults.push(place);
//     }

//     uniqueResults.forEach((place) => {
//         const li = document.createElement("li");
//         li.textContent = [
//             place.name,
//             place.admin1 ? `(${place.admin1})` : "",
//         ]
//             .filter(Boolean)
//             .join("");

//         li.addEventListener("click", () => {
//             getWeatherForPlace(place);
//         });

//         list.appendChild(li);
//     });
// }

// async function getWeatherForPlace(place: GeocodingResult) {
//     const resultDiv = document.querySelector<HTMLDivElement>("#place-weather-result");
//     if (!resultDiv) return;

//     const lat = place.latitude;
//     const lon = place.longitude;

//     const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

//     const weatherResponse = await fetch(weatherUrl);
//     const weatherData = await weatherResponse.json();

//     const displayNameParts = [
//         place.name,
//         place.admin1 ? `(${place.admin1})` : "",
//     ].filter(Boolean);

//     const displayName = displayNameParts.join("");

//     resultDiv.textContent = `${displayName} の現在の気温: ${weatherData.current_weather.temperature}℃`;
// }


document.addEventListener("DOMContentLoaded", () => {
    // ここでコンポーネントを起動
    setupWeatherSearchComponent({
        inputSelector: "#place-input",
        buttonSelector: "#place-search-button",
        candidatesSelector: "#place-candidates",
        resultSelector: "#place-weather-result",
    });


    // getWeatherTokyo();
    // requestUserLocation();

    // 地名検索用
    // const input = document.querySelector<HTMLInputElement>("#place-input");
    // const button = document.querySelector<HTMLButtonElement>(
    //     "#place-search-button"
    // );

    // if (button && input) {
    //     button.addEventListener("click", () => {
    //         searchPlace(input.value);
    //     });

    //     input.addEventListener("keydown", (e) => {
    //         if (e.key === "Enter") {
    //             searchPlace(input.value);
    //         }
    //     });
    // }
});

// 都道府県エリアjson表示用
fetch("/test-areas")
    .then((res) => res.json())
    .then((data) => {
        console.log("成功！", data);

        // 北海道のエリアを表示してみる
        console.log("北海道のエリア:", data["北海道"]);
    })
    .catch((err) => console.error(err));
