<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RefData extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function getRouteKeyName()
    {
        return 'code';
    }
}