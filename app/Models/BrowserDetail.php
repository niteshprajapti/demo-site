<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BrowserDetail extends Model
{


    protected $table = 'browser_details';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'ip','userAgent', 'browser', 'deviceName'
    ];




}
