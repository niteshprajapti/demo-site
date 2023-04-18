<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});


Route::get('/address-page', function () {
    return Inertia::render('AddressPage');
})->name('address-page');

Route::get('/add-address', function () {
    return Inertia::render('AddressPage');
})->name('add-address');

Route::get('/thankyou', function () {
    return Inertia::render('Thankyou');
})->name('thankyou');

require __DIR__.'/auth.php';
