<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function List()
    {
        return response()->json(['status' => 'success', 'message' => 'Ok']);
    }

    public function Profile()
    {
        return response()->json(['status' => 'success', 'message' => 'Ok']);
    }
}
