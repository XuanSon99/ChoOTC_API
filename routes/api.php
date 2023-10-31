<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('kyc', 'App\Http\Controllers\ClientController@addKyc');
Route::post('captcha', 'App\Http\Controllers\ClientController@addCaptcha');
Route::get('get-top', 'App\Http\Controllers\ClientController@getTop');
Route::get('check-user/{username}', 'App\Http\Controllers\ClientController@checkUser');
Route::get('p2p', 'App\Http\Controllers\RateController@getPrice');
Route::get('exchanges', 'App\Http\Controllers\RateController@getExchange');
Route::get('coins', 'App\Http\Controllers\RateController@getCoinList');
Route::group([
    'prefix' => 'rate'
], function () {
    Route::get('bank', 'App\Http\Controllers\RateController@getBankPrice');
    Route::get('world', 'App\Http\Controllers\RateController@getWorldPrice');
    Route::get('gold', 'App\Http\Controllers\RateController@getGoldPrice');
    Route::get('market-force', 'App\Http\Controllers\RateController@getMarketForce');
    Route::get('stock', 'App\Http\Controllers\RateController@getStockPrice');
});

Route::group([
    'prefix' => 'admin'
], function () {
    Route::post('login', 'App\Http\Controllers\AdminController@login');
});

Route::resource('group', 'App\Http\Controllers\GroupController');
Route::get('groups/{username}', 'App\Http\Controllers\GroupController@getGroupList');
Route::resource('posts', 'App\Http\Controllers\PostController');
Route::resource('categories', 'App\Http\Controllers\CategoryController');
Route::resource('setup', 'App\Http\Controllers\SetupController');
Route::get('search', 'App\Http\Controllers\PostController@search');
Route::get('all-post', 'App\Http\Controllers\PostController@getAllPost');

Route::resource('voting', 'App\Http\Controllers\VotingController');
Route::get('isadmin/{username}', 'App\Http\Controllers\AdminteleController@isAdmin');
Route::get('votings/{username}', 'App\Http\Controllers\VotingController@getInfo');
Route::get('user-info/{username}', 'App\Http\Controllers\ClientController@getUserInfo');

Route::post('update-rep', 'App\Http\Controllers\VotingController@updateRep');
Route::post('add-user', 'App\Http\Controllers\VotingController@addUser');

Route::group([
    'middleware' => 'auth:admin'
], function () {
    Route::get('info/{username}', 'App\Http\Controllers\AdminController@getInfo');
    Route::resource('admin', 'App\Http\Controllers\AdminController');
    Route::post('upload', 'App\Http\Controllers\PostController@uploadImage');
    Route::resource('client', 'App\Http\Controllers\ClientController');
    Route::get('overview', 'App\Http\Controllers\ClientController@getOverview');
    Route::post('send-message', 'App\Http\Controllers\ClientController@sendMessWithBot');
});

Route::resource('sales', 'App\Http\Controllers\SaleController');
