<?php

namespace App\Http\Controllers;

use App\Models\Setup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;

class SetupController extends Controller
{
    public function index()
    {
        return Setup::orderBy('created_at', 'DESC')->get();
    }

    public function show(Setup $Setup){
        return $Setup;
    }

    public function update(Request $request, Setup $Setup)
    {
        $Setup->update($request->all());
        return response()->json(["status" => true], 200);
    }
}
