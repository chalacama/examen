<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class youtube extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $table ='youtubes';
    protected $fillable=['nombre','url','seguidores'];
}
