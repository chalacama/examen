<?php

namespace App\Http\Controllers;

use App\Models\item;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf as FacadePdf;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Item::all();
        return response()->json([
            "items" => $items
        ]);
    }
    public function pdf(){
        $items = Item::all();
        $pdf = FacadePdf::loadView('item.pdf',compact('items'));
    return $pdf->download('reporte.pdf');

    }
/*     public function ImprimirPdf(){
        $items = Item::all();
        $pdf=PDF::loadView('item.pdf',compact('items'));
        return $pdf->download();
    } */
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $item = Item::create($request->all());
        return response()->json([
            'messages' => 'add'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $item = Item::find($id);
        return response()->json([
            "item" => $item
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $item = Item::find($id)->update($request->all());
        return response()->json([
            'messages' => 'actualizado'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = Item::find($id)->delete();
        return response()->json(['messages'=>'Se Elimino']);
    }
}
