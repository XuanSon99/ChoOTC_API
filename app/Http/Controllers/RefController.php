<?php

namespace App\Http\Controllers;

use App\Models\Ref;
use App\Models\History;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;

class RefController extends Controller
{
    public function index()
    {
        return Ref::orderBy('created_at', 'DESC')->get();
    }

    public function show(Ref $Ref){
        $db = json_decode($Ref["data"]);
        $data = array();
        foreach ($db as $item) {
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
        return $data;
    }

    public function checkUser(Request $request)
    {
        $uid = $request->route('uid');
        $ref = Ref::where("code", "cm")->first();
        $db = json_decode($ref["data"]);
        $data = array();
        foreach ($db as $item) {
            if($item->uid == $uid)
            {
                $his = History::where("uid", $item->uid)->where("status", 'p')->get()->toArray();
                $withdraw = array_sum(array_column($his,'amount'));

                $wait = History::where("uid", $item->uid)->where("status", 'w')->get()->toArray();
                $withdraw_wait = array_sum(array_column($wait,'amount'));

                $list = new \stdClass();
                $list->uid = $item->uid;
                $list->deposit = $item->deposit;
                $list->inviteTime = $item->inviteTime;
                $list->refund = $item->total;
                $list->withdraw = $withdraw;
                $list->withdraw_wait = $withdraw_wait;
                array_push($data, $list);
            }
        }
        return $data;
    }

    public function update(Request $request, Ref $Ref)
    {
        $Ref->update($request->all());
        return response()->json(["status" => true], 200);
    }
}
