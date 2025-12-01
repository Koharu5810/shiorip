<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    /**
     * GET /api/weather/search?query=横浜市
     * 地名から候補リストを返す
     */
    public function search(Request $request)
    {
        $query = $request->query('query');

        if (!$query) {
            return response()->json([
                'message' => 'query パラメータは必須です。',
            ], 422);
        }

        $apiKey = config('services.openweather.key');
        $baseUrl = config('services.openweather.base_url');

        // OpenWeather Geocoding API
        $response = Http::get("{$baseUrl}/geo/1.0/direct", [
            'q'     => $query,
            'limit' => 5,
            'appid' => $apiKey,
        ]);

        if (! $response->successful()) {
            return response()->json([
                'message' => '位置情報の取得に失敗しました。',
            ], 500);
        }

        $items = collect($response->json())->map(function ($item) {
            $nameJa = $item['local_names']['ja'] ?? null;
            $name = $nameJa ?? ($item['name'] ?? null);

            return [
                'name'    => $name,
                'state'   => $item['state'] ?? null,
                'country' => $item['country'] ?? null,
                'lat'     => $item['lat'] ?? null,
                'lon'     => $item['lon'] ?? null,
            ];
        })->values();

        return response()->json([
            'data' => $items,
        ]);
    }

    /**
     * GET /api/weather/current?lat=35.4&lon=139.6
     * 緯度経度から現在の天気を返す
     */
    public function current(Request $request)
    {
        $lat = $request->query('lat');
        $lon = $request->query('lon');

        if ($lat === null || $lon === null) {
            return response()->json([
                'message' => 'lat と lon は必須です。',
            ], 422);
        }

        $apiKey = config('services.openweather.key');
        $baseUrl = config('services.openweather.base_url');

        $response = Http::get("{$baseUrl}/data/2.5/weather", [
            'lat'   => $lat,
            'lon'   => $lon,
            'appid' => $apiKey,
            'units' => 'metric', // 摂氏
            'lang'  => 'ja',     // 説明文を日本語に
        ]);

        if (! $response->successful()) {
            return response()->json([
                'message' => '天気情報の取得に失敗しました。',
            ], 500);
        }

        $json = $response->json();

        $weather = [
            'temp'        => $json['main']['temp']        ?? null,
            'feels_like'  => $json['main']['feels_like']  ?? null,
            'temp_min'    => $json['main']['temp_min']    ?? null,
            'temp_max'    => $json['main']['temp_max']    ?? null,
            'humidity'    => $json['main']['humidity']    ?? null,
            'pressure'    => $json['main']['pressure']    ?? null,
            'description' => $json['weather'][0]['description'] ?? null,
            'icon'        => $json['weather'][0]['icon']        ?? null,
            'wind_speed'  => $json['wind']['speed']       ?? null,
        ];

        return response()->json([
            'data' => $weather,
        ]);
    }

    // 都道府県内エリア表示用
    public function areas()
    {
        return response()->json(config('area'));
    }

}
