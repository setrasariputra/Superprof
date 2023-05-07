<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestingController extends Controller
{
    public function Hello()
    {
        return response()->json(['status' => 'success', 'message' => 'Ok']);
    }

    public function Pwd()
    {
        $pwd = app('hash')->make('123456789');
        dd($pwd);
    }
}
