<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrefectureTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $prefectures = [
            ['id' => 1, 'name' => '北海道',     'region' => '北海道'],
            ['id' => 2, 'name' => '青森県',     'region' => '東北'],
            ['id' => 3, 'name' => '岩手県',     'region' => '東北'],
            ['id' => 4, 'name' => '宮城県',     'region' => '東北'],
            ['id' => 5, 'name' => '秋田県',     'region' => '東北'],
            ['id' => 6, 'name' => '山形県',     'region' => '東北'],
            ['id' => 7, 'name' => '福島県',     'region' => '東北'],
            ['id' => 8, 'name' => '新潟県',     'region' => '北関東・甲信越'],
            ['id' => 9, 'name' => '山梨県',     'region' => '北関東・甲信越'],
            ['id' => 10, 'name' => '長野県',     'region' => '北関東・甲信越'],
            ['id' => 11, 'name' => '茨城県',     'region' => '北関東・甲信越'],
            ['id' => 12, 'name' => '栃木県',     'region' => '北関東・甲信越'],
            ['id' => 13, 'name' => '群馬県',     'region' => '北関東・甲信越'],
            ['id' => 14, 'name' => '埼玉県',     'region' => '南関東'],
            ['id' => 15, 'name' => '千葉県',     'region' => '南関東'],
            ['id' => 16, 'name' => '東京都',     'region' => '南関東'],
            ['id' => 17, 'name' => '神奈川県',   'region' => '南関東'],
            ['id' => 18, 'name' => '富山県',     'region' => '北陸'],
            ['id' => 19, 'name' => '石川県',     'region' => '北陸'],
            ['id' => 20, 'name' => '福井県',     'region' => '北陸'],
            ['id' => 21, 'name' => '岐阜県',     'region' => '東海'],
            ['id' => 22, 'name' => '静岡県',     'region' => '東海'],
            ['id' => 23, 'name' => '愛知県',     'region' => '東海'],
            ['id' => 24, 'name' => '三重県',     'region' => '東海'],
            ['id' => 25, 'name' => '滋賀県',     'region' => '近畿'],
            ['id' => 26, 'name' => '奈良県',     'region' => '近畿'],
            ['id' => 27, 'name' => '和歌山県',   'region' => '近畿'],
            ['id' => 28, 'name' => '京都府',     'region' => '近畿'],
            ['id' => 29, 'name' => '大阪府',     'region' => '近畿'],
            ['id' => 30, 'name' => '兵庫県',     'region' => '近畿'],
            ['id' => 31, 'name' => '鳥取県',     'region' => '中国'],
            ['id' => 32, 'name' => '島根県',     'region' => '中国'],
            ['id' => 33, 'name' => '岡山県',     'region' => '中国'],
            ['id' => 34, 'name' => '広島県',     'region' => '中国'],
            ['id' => 35, 'name' => '山口県',     'region' => '中国'],
            ['id' => 36, 'name' => '徳島県',     'region' => '四国'],
            ['id' => 37, 'name' => '香川県',     'region' => '四国'],
            ['id' => 38, 'name' => '愛媛県',     'region' => '四国'],
            ['id' => 39, 'name' => '高知県',     'region' => '四国'],
            ['id' => 40, 'name' => '福岡県',     'region' => '九州'],
            ['id' => 41, 'name' => '佐賀県',     'region' => '九州'],
            ['id' => 42, 'name' => '長崎県',     'region' => '九州'],
            ['id' => 43, 'name' => '熊本県',     'region' => '九州'],
            ['id' => 44, 'name' => '大分県',     'region' => '九州'],
            ['id' => 45, 'name' => '宮崎県',     'region' => '九州'],
            ['id' => 46, 'name' => '鹿児島県',   'region' => '九州'],
            ['id' => 47, 'name' => '沖縄県',     'region' => '沖縄'],
        ];

        DB::table('prefectures')->insert($prefectures);
    }
}
