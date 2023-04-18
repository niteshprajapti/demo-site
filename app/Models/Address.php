<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{


    protected $table = 'addresses';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'address_line1','address_line2', 'address_line3'
    ];




}
