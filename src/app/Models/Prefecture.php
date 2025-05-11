<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prefecture extends Model
{
    use HasFactory;

    public function spots()
    {
        return $this->belongsToMany(Spot::class, 'prefecture_spot');
    }
    public function areas()
    {
        return $this->hasMany(Area::class);
    }
}
