<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\TodoRequest;
use App\Todo;
use App\Constant;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::get_todos();
        return response()->json(['todos' => $todos]);
    }

    public function store(TodoRequest $request)
    {
        $todo = new Todo;
        $todo->user_id = Auth::id();
        $todo->todo = $request->todo;
        $todo->save();

        $todos = Todo::get_todos();

        return response()->json(['todos' => $todos]);
    }

    public function complete(Request $request)
    {
        $todo = Todo::find($request->id);
        $todo->status = Constant::TODO_STATUS_COMPLETE;
        $todo->save();

        $todos = Todo::get_todos();

        return response()->json(['todos' => $todos]);
    }

    public function incomplete(Request $request)
    {
        $todo = Todo::find($request->id);
        $todo->status = Constant::TODO_STATUS_INCOMPLETE;
        $todo->save();

        $todos = Todo::get_todos();

        return response()->json(['todos' => $todos]);
    }
}
