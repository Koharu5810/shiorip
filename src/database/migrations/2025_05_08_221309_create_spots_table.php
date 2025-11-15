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
        Schema::create('spots', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);                      // 観光地名
            $table->string('category', 100);                  // カテゴリ
            $table->text('description');                      // 説明文

            $table->enum('season_type', ['all_year', 'seasonal', 'unknown'])->default('unknown');  // 営業月（通年、季節営業、不明）
            $table->string('season_months', 50)->nullable();  // 季節営業の対応
            $table->enum('closed_type', ['none', 'weekly', 'irregular'])->default('none');     // 休業日（無休、毎週○曜、不定休）
            $table->string('closed_weekdays', 20)->nullable();// mon, wedなど
            $table->text('business_notes')->nullable();       // 営業日についての備考

            $table->time('default_opening_time')->nullable(); // 通年時営業開始時間
            $table->time('default_closing_time')->nullable(); // 通年時営業終了時間

            $table->integer('duration_minutes');              // 所要時間（分）
            $table->text('access');                           // 交通情報
            $table->string('website')->nullable();
            $table->string('phone', 20)->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spots');
    }
};
