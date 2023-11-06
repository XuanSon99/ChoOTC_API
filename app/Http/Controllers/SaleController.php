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

    public function index(Request $request)
    {
        $query = Sale::orderBy('created_at', 'DESC')->where('type', $request->get('type'));

        if ($request->has('from') && $request->has('to'))
            if ($request->get('from') == $request->get('to'))
                $query->whereDate('created_at', '=', $request->get('from'));
            else
                $query->whereBetween('created_at', [$request->get('from'), $request->get('to')]);

        $perPage = 10;
        if ($request->has('perPage'))
            $perPage = $request->get('perPage');

        return $query->paginate($perPage);
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
            'note' => $request->note,
            'type' => $request->type
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
        $Sale->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(Sale $Sale)
    {
        $Sale->delete();
        return response()->json(["status" => true], 200);
    }

    public function search(Request $request)
    {
        $query = $request->get('query');
        return Sale::where('code', 'like', "%{$query}%")->get();
    }

    public function paginate($items, $perPage, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }
}
