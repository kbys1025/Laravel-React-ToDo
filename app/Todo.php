<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Todo extends Model
{
    protected $fillable = [
        'todo', 'status',
    ];

    public static function get_todos() {
        $todos = Todo::where('user_id', Auth::id())
                    ->orderBy('created_at', 'desc')
                    ->get();

        return $todos;
    }
}
