<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\TodoRequest;
use App\Todo;

class TodoController extends Controller
{
    public function store(TodoRequest $request)
    {
        $todo = new Todo;
        $todo->user_id = Auth::id();
        $todo->todo = $request->todo;
        $todo->save();

        return response()->json(['status' => 200, 'message' => null]);
    }
}
