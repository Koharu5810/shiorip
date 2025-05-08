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
        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('spot_id')->constrained()->cascadeOnDelete();
            $table->string('type');                             // 例）トイレ・駐車場
            $table->enum('status', [
                'available', 'unavailable', 'conditional',
            ]);                                                 // 有・無・条件付き
            $table->text('note')->nullable();                   // statusがconditionalのとき必須
            $table->enum('availability_type', [
                'year_round', 'seasonal', 'closed_winter', 'other'
            ])->nullable()->default('null');                    // 例）無休、季節限定、冬季閉鎖、その他
            $table->string('availability_note')->nullable();    // 営業形態に対する備考
            $table->text('remarks');                            // 備考欄
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facilities');
    }
};
