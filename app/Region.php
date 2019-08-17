<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    public function country()
    {
        return $this->belongsTo(Country::class);
    }


    public function cities()
    {
        return $this->hasMany(City::class);
    }


    public function user()
    {
        return $this->hasMany(User::class);
    }
}
