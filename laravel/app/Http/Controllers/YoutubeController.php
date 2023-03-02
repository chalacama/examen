<?php

namespace App\Http\Controllers;

use App\Models\youtube;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class YoutubeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $youtuber = Youtube::all();
        return response()->json([
            "youtubes" => $youtuber
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $youtube = Youtube::create($request->all());
        return response()->json([
            'youtube' => $youtube
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $youtube = Youtube::find($id);
        return response()->json([
            "youtube" => $youtube
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $youtube = Youtube::find($id)->update($request->all());
        return response()->json([
            'youtube' => $youtube
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $youtube = Youtube::find($id)->delete();
        return response()->json(['messages'=>'Se Elimino']);
    }
}
