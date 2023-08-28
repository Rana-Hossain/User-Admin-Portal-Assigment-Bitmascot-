<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;

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

//Route::post('register',[UserController::class,'register']);

Route::post('registerUser', [UserController::class,'registerUser']);
Route::post('checkEmailUnique', [UserController::class,'checkEmailUnique']);
Route::post('login', [UserController::class,'login']);
Route::get('search/{key}', [UserController::class,'search']);
Route::get('userlist', [UserController::class,'userlist']);

Route::post('addAdmin', [AdminController::class,'addAdmin']);
Route::post('adminLogin', [AdminController::class,'adminLogin']);