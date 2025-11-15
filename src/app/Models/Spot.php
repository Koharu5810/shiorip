<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spot extends Model
{
    use HasFactory;

    public function prefectures()
    {
        return $this->belongsToMany(Prefecture::class, 'prefecture_spot');
    }
    public function areas()
    {
        return $this->belongsToMany(Area::class, 'area_spot');
    }
    public function images()
    {
        return $this->hasMany(SpotImage::class);
    }
    public function budget()
    {
        return $this->hasOne(Budget::class);
    }
    public function facilities()
    {
        return $this->hasMany(Facility::class);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'spot_tag');
    }
    public function monthlyHours()
    {
        return $this->hasMany(SpotMonthlyHour::class);
    }

    // 特定の月の営業時間を取得するヘルパー
    public function monthlyHourFor(int $month)
    {
        // 1〜12 想定
        return $this->monthlyHours
            ->firstWhere('month', $month);
    }
    /**
     * 特定月営業時間ヘルパーを使う時↓
     * $spot = Spot::with('monthlyHours')->find($id);

    *  // 全月分ループ
    *foreach ($spot->monthlyHours as $mh) {
    *    echo $mh->month.'月: '.$mh->opening_time.'〜'.$mh->closing_time;
    *}

    *  // 特定の月だけ
    *$august = $spot->monthlyHourFor(8);
    *if ($august && $august->opening_time) {
    *    // 8月は営業
    *} else {
    *    // 8月は閉鎖（opening_time が null）
    *}
     */


}
