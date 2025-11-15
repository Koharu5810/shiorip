<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('spot_monthly_hours', function (Blueprint $table) {
            $table->id();
            $table->foreignId('spot_id')->constrained()->cascadeOnDelete();
            $table->tinyInteger('month');              // 1月〜12月
            $table->time('opening_time')->nullable();  // 月ごとの開業時間
            $table->time('closing_time')->nullable();
            $table->string('note', 100)->nullable();   // 月別メモ（ライトアップあり、冬季休業など）
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spot_monthly_hours');
    }
};
