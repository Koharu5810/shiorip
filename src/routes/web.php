<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// JSテストページ表示用
Route::get('/js-test', function () {
    return view('js-test.js-test');
});
Route::get('/practice', fn () => view('js-test.practice'));
Route::get('/ts-test', function () {
    return view('layouts.app');
});
