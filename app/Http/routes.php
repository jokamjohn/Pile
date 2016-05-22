<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

use App\Performance;

Route::get('/', function () {
    return view('welcome');
});


Route::get('wins', function () {

    $kagga = ['name' => 'kagga', 'wins' => 50];

    $aysher = ['name' => 'aysher', 'wins' => 10];

//    factory(\App\Performance::class)->create();

    return view('wins', compact('kagga', 'aysher'));
});

Route::get('/rev', function () {

    /*Get records for this year(scope)
    Get the months as the key
    sum up the revenues for each day of the month
    group the records by month
    only return the revue column as the value
    **/

    $revenue = Performance::thisYear()
        ->selectRaw('MONTHNAME(created_at) as month, sum(revenue) as revenue')
        ->groupBy('month')
        ->orderBy('created_at', 'ASC')
        ->pluck('revenue', 'month');

    //dd($revenue);

    return view('revenue', compact('revenue'));
});



/**
 * Return data to the endpoint
 */
Route::get('/api/revenue', function () {
    return Performance::thisYear()
        ->selectRaw('MONTHNAME(created_at) as month, sum(revenue) as revenue')
        ->groupBy('month')
        ->orderBy('created_at', 'ASC')
        ->pluck('revenue', 'month');
});

Route::get('/ajax', function () {
    
    return view('ajax');
});

Route::get('/dynamic', function () {
    return view('revenueGraph');
});

Route::get('/api/dynamic', function () {

    $range = request('range', 30);

    $revenue = Performance::spanningDays($range)
        ->pluck('revenue', 'created_at');

    return $revenue;
});