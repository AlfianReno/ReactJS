<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('api/register' , ['uses' => 'LoginController@register']);
$router->post('api/login' , ['uses' => 'LoginController@login']);

//index
$router->get('api/kategori' , ['uses' => 'KategoriController@index']);
$router->get('api/menu' , ['uses' => 'MenuController@index']);
$router->get('api/pelanggan' , ['uses' => 'PelangganController@index']);
$router->get('api/order' , ['uses' => 'OrderController@index']);

// create
$router->post('api/kategori' , ['uses' => 'KategoriController@create']);
$router->post('api/menu' , ['uses' => 'MenuController@create']);

// delete
$router->delete('api/pelanggan/{id}' , ['uses' => 'PelangganController@destroy']);
$router->delete('api/menu/{id}' , ['uses' => 'MenuController@destroy']);

// show id
$router->get('api/menu/{id}' , ['uses' => 'MenuController@show']);

//update
$router->post('api/menu/{id}' , ['uses' => 'MenuController@update']);
$router->put('api/order/{id}' , ['uses' => 'OrderController@update']);


$router->group(['prefix' => 'api','middleware'=>'auth'] , function() use ($router) {
    
    $router->get('kategori/{id}' , ['uses' => 'KategoriController@show']);
    $router->get('pelanggan/{id}' , ['uses' => 'PelangganController@show']);

    $router->delete('kategori/{id}' , ['uses' => 'KategoriController@destroy']);
    

    $router->put('kategori/{id}' , ['uses' => 'KategoriController@update']);
    $router->put('pelanggan/{id}' , ['uses' => 'PelangganController@update']);

    
    $router->post('pelanggan' , ['uses' => 'PelangganController@create']);
    
});


