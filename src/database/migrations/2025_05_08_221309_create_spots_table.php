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
            $table->string('name');                 // 観光地名
            $table->string('area');                 // 所在エリア
            $table->string('category');             // カテゴリ
            $table->text('description');            // 説明文
            $table->integer('duration_minutes');    // 所要時間（分）
            $table->text('access');                 // 交通情報
            $table->string('website')->nullable();
            $table->string('phone')->nullable();
            $table->string('opening_hours')->nullable();
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
