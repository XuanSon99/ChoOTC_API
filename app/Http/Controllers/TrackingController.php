<?php

namespace App\Http\Controllers;

use App\Models\Tracking;
use Illuminate\Http\Request;
use Validator;

class TrackingController extends Controller
{
    public function index()
    {
        return Tracking::all();
    }

    public function update(Request $request, Tracking $Tracking)
    {
        return response()->json(["status" => true], 200);
    }

    public function destroy(Tracking $Tracking)
    {
        $Tracking->delete();
        return response()->json(["status" => true], 200);
    }
}
