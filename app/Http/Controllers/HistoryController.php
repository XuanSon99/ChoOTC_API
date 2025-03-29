<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Models\Ref;
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

        $uid = $request->uid;
        $ref = Ref::where("code", "cm")->first();
        $db = json_decode($ref["data"]);
        $data = array();
        foreach ($db as $item) {
            if($item->uid == $uid)
            {
                $his = History::where("uid", $item->uid)->where("status", 'p')->get()->toArray();
                $withdraw = array_sum(array_column($his,'amount'));

                $list = new \stdClass();
                $list->uid = $item->uid;
                $list->deposit = $item->deposit;
                $list->inviteTime = $item->inviteTime;
                $list->refund = $item->total;
                $list->withdraw = $withdraw;
                array_push($data, $list);
            }
        }
        
        $refund = array_values($data)[0]->refund;
        $withdraw = array_values($data)[0]->withdraw;
        $balance = $refund / 2 - $withdraw;

        if($balance < $request->amount){
            return response()->json(["status" => false, "message" => ["Số dư không đủ"]], 400);
        }

        $data = new History([
            'uid' => $request->uid,
            'amount' => $request->amount,
            'status' => 'w'
        ]);
        $data->save();

        $chat_id = "-4768463107";
        $text = $request->uid . " vừa thực hiện lệnh rút " . $request->amount . "USDT";
        $this->sendMessage($chat_id, $text);

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function withdrawTotal(Request $request)
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

    public function sendMessage($chat_id, $text)
    {
        $token = "7990958051:AAFdbbvQHda4fKvN6-Dy7Cc8obh_lDnr14A";

        $params = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chat_id . "&text=" . $text . "&parse_mode=html";

        Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($params);
    }
}
