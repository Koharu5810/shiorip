<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    use HasFactory;

    public function prefecture()
    {
        return $this->belongsTo(Prefecture::class);
    }
    public function spots()
    {
        return $this->belongsToMany(Spot::class, 'area_spot');
    }
}
