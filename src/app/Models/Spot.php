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
}
