<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            '桜', '花火', '紅葉', '雪景色', '温泉', '登山', '絶景', '歴史', '神社仏閣', '祭り', 'グルメ', 'スイーツ', 'おみやげ', '無料スポット', 'ロケ地・聖地', '国宝・指定文化財', '世界遺産',
        ];

        foreach ($tags as $tag) {
            DB::table('tags')->insert([
                'name' => $tag,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
