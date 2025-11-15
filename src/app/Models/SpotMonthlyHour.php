<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpotMonthlyHour extends Model
{
    use HasFactory;

    protected $table = 'spot_monthly_hours';

    protected $fillable = [
        'spot_id',
        'month',
        'opening_time',
        'closing_time',
    ];

    public function spot()
    {
        return $this->belongsTo(Spot::class);
    }
}
