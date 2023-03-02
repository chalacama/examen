<?php

use App\Http\Controllers\ItemController;
use App\Http\Controllers\YoutubeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/item/pdf',[ItemController::class,'pdf']);
Route::resource('/youtube', YoutubeController::class)->only('index', 'store', 'show','update', 'destroy');


Route::resource('/item', ItemController::class)->only('index', 'store', 'show','update', 'destroy');
/* Route::get('/item/imppdf',[ItemController::class,'ImprimirPdf']); */

