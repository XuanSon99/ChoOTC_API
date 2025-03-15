<?php

namespace App\Http\Controllers;

use App\Models\Ref;
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
        return json_decode($Ref["data"], true);
        foreach ($Ref["data"] as $key) {
            return $key;
        }

        
    }

    public function update(Request $request, Ref $Ref)
    {
        $Ref->update($request->all());
        return response()->json(["status" => true], 200);
    }
}
