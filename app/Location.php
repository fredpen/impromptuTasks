<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $guarded = [];

    // return all instance if location name in caps
    public function getNameAttribute($value)
    {
        return ucfirst($value);
    }
}
