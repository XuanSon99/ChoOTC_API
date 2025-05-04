<?php

namespace App\Http\Controllers;

use App\Models\Voting;
use App\Models\Client;
use Illuminate\Http\Request;
use Validator;

class VotingController extends Controller
{
    public function getInfo(Request $request)
    {
        $username = $request->route('username');
        return Voting::orderBy('created_at', 'DESC')->where('username', $username)->first();
    }

    public function store(Request $request)
    {
        $data = new Voting([
            'username' => $request->username,
            'start_time' => $request->start_time,
            'voted_user' => '',
            'percent' => 0,
            'msg_id' => $request->msg_id
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function update(Request $request, Voting $Voting)
    {
        // $Voting->update($request->all());
        Voting::orderBy('created_at', 'DESC')->where('username', $Voting->username)->first()->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(Voting $Voting)
    {
        $Voting->delete();
        return response()->json(["status" => true], 200);
    }

    public function updateRep(Request $request)
    {
        $client = Client::where('username', $request->username)->first();
        Client::where('username', $request->username)->update([ 'transaction' => $client->transaction + 1]);
    }

    public function addUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:clients',
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Yêu cầu đã được gửi!"]], 400);
        }

        $data = new Client([
            'username' => $request->username,
            'reputation' => "no",
            'transaction' => 0,
        ]);

        $data->save();
    }
}
