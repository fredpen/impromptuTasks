<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skills extends Model
{

    public function skillArray($user)
    {
        $skillId = [];
        foreach ($user->skills as $skill) {
            array_push($skillId, $skill->id);
        }
        return $skillId;
    }
}
