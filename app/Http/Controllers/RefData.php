<?php

namespace App\Http\Controllers;

use App\Models\RefData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;

class RefDataController extends Controller
{
    public function index()
    {
        return RefData::orderBy('created_at', 'DESC')->get();
    }

    public function show(RefData $RefData){
        return $RefData;
    }

    public function update(Request $request, RefData $RefData)
    {
        $RefData->update($request->all());
        return response()->json(["status" => true], 200);
    }
}
