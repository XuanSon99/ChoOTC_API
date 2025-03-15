<?php

namespace App\Http\Controllers;

use App\Models\History;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;

class HistoryController extends Controller
{
    public function index()
    {
        return History::orderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $data = new History([
            'uid' => $request->uid,
            'amount' => $request->amount,
            'status' => 'w'
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function hisUser(Request $request)
    {
        $uid = $request->route('uid');
        $his = History::where("uid", $uid)->where("status", 'p')->get()->toArray();
        $value = array_sum(array_column($his,'amount'));
        return $value;
    }

    public function update(Request $request, History $History)
    {
        $History->update([
            'status' => $request->status
        ]);
        return response()->json(["status" => true], 200);
    }
}
