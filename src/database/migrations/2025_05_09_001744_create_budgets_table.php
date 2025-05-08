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
        Schema::create('budgets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('spot_id')->constrained()->cascadeOnDelete();
            $table->boolean('is_free')->default(false); // 無料フラグ（trueならmin/maxはnull）
            $table->integer('min_price')->nullable();   // 下限金額
            $table->integer('max_price')->nullable();   // 上限金額
            $table->string('note')->nullable();         // 備考（例：別途拝観料あり）
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('budgets');
    }
};
