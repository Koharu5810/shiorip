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
            $table->string('name', 150);                    // 観光地名
            $table->string('category', 100);                // カテゴリ
            $table->text('description');                    // 説明文
            $table->integer('duration_minutes');            // 所要時間（分）
            $table->string('closed_days', 255)->nullable(); // 休業日（例：毎週月曜、冬期閉鎖、不定休）
            $table->string('opening_hours')->nullable();    // 営業開始時間
            $table->string('closing_hours')->nullable();    // 営業終了時間
            $table->text('access');                         // 交通情報
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
