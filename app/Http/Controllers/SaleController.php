<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;
use Validator;

class SaleController extends Controller
{
    public function generateKey()
    {
        $key = "";
        for ($x = 1; $x <= 8; $x++) {
            $key .= random_int(0, 9);
        }
        return $key;
    }

    public function index()
    {
        return Sale::orderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $data = new Sale([
            'code' => $this->generateKey(),
            'seller' => $request->seller,
            'client' => $request->client,
            'amount' => $request->amount,
            'rate' => $request->rate,
            'total_money' => $request->total_money,
            'paid_money' => $request->paid_money,
            'debt' => $request->debt,
            'bank_name' => $request->bank_name,
            'note' => $request->note
        ]);
        $data->save();

        return response()->json(["status" => true, "data" => $data], 201);
    }

    public function show(Sale $Sale)
    {
        return $Sale;
    }

    public function update(Request $request, Sale $Sale)
    {
        return response()->json(["status" => true], 200);
    }

    public function destroy(Sale $Sale)
    {
        $Sale->delete();
        return response()->json(["status" => true], 200);
    }
}
