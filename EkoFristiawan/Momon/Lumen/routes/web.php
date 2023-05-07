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

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('/v1/testing/hello', 'TestingController@Hello');
    $router->get('/v1/testing/pwd', 'TestingController@Pwd');

    $router->post('/v1/login', 'AuthController@Login');

    // $router->group(['middleware' => 'auth'], function ($router) {
    //     $router->post('logout', 'AuthController@Logout');
    //     $router->post('refresh', 'AuthController@Refresh');
    //     $router->post('me', 'AuthController@Me');
    // });

    // // auth
    // $router->get('/v1/login', 'AuthController@Login');
    // $router->get('/v1/recovery', 'AuthController@Recovery');
    // $router->get('/v1/register', 'AuthController@Register');

    // // dahsboard
    // $router->get('/v1/dashboard', 'DashboardController@Dashboard');

    // // user
    // $router->get('/v1/user/list', 'UserController@List');
    // $router->get('/v1/user/profile', 'UserController@Profile');



});
