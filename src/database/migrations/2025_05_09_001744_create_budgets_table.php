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
            $table->enum('price_type', [
                'free', 'paid', 'paid_seasonal', 'unknown',
            ])->default('unknown');                        // 料金種別
            $table->integer('base_price')->nullable();     // 目安料金（予算表示？）
            $table->string('price_range', 20)->nullable(); // 料金ラベル（0-500 / 501-1000 / 1001-2000 / 2001-plus）
            $table->string('note')->nullable();            // 備考（例：別途拝観料あり）
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
