<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Traits\ApiResponse;
use Illuminate\Validation\Rule;

class AddressController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        try {
            DB::beginTransaction();

            for ($i=0; $i <= 2 ; $i++) {
                $address = new Address();
                $address->user_id = $request->user_id;
                if ($request->has("address_line1".$i)) {

                    $validator = Validator::make($request->all(), [
                        'address_line1'.$i => 'required',
                        'address_line2'.$i => 'required',
                        'address_line3'.$i => 'required',
                    ]);

                    if ($validator->fails()) {
                        return $this->failResponse([
                            "message" => $validator->messages()->all()[0],
                            "messages" => $validator->messages()->all()
                        ], 422);
                    }

                    $address->address_line1 = $request->address_line1.$i;
                    $address->address_line2 = $request->address_line2.$i;
                    $address->address_line3 = $request->address_line3.$i;
                    $address->save();
                }

            }

            DB::commit();

            return $this->successResponse([
                'message' => "Address Added Successfully!"
            ]);


        } catch (\Exception $e) {
            return $this->failResponse([
                "message" => $e->getMessage(),
            ], 500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
