<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\BrowserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Traits\ApiResponse;
use Illuminate\Validation\Rule;
use Jenssegers\Agent\Facades\Agent;


class UserController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $ip = $request->ip();
        // $userDetail = Location::get($request->ip());
        preg_match('#\((.*?)\)#', $request->userAgent(), $match);
        $userSystemInfo = explode(';', $match[1]);
        $userAgent = $request->userAgent(); // User Agent
        $browser = Agent::browser(); // User browser
        $matchLength = count($userSystemInfo);

        if ($matchLength > 1) {
            $deviceName = ltrim($userSystemInfo[1]);
        }

        $detail =  BrowserDetail::where(['ip' => $ip, 'browser' => $browser, 'userAgent' => $userAgent])->first();
        if ($detail) {
            return $this->successResponse([
                'message' => "Already added info!"
            ]);
        }

        $detail = new BrowserDetail();
        $detail->ip = $ip;
        $detail->userAgent = $userAgent;
        $detail->browser = $browser;
        $detail->deviceName = $deviceName;
        $detail->save();


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

            $validator = Validator::make($request->all(), [
                'email' => 'required|email|unique:users,email,NULL,id',
                'phoneNumber' => 'required|unique:users,phoneNumber,NULL,id'
            ]);

            if ($validator->fails()) {
                return $this->failResponse([
                    "message" => $validator->messages()->all()[0],
                    "messages" => $validator->messages()->all()
                ], 422);
            }

            $user = new User();
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->dob = $request->dob;
            $user->phoneNumber = $request->phoneNumber;
            $user->email = $request->email;
            $user->save();

            DB::commit();

            return $this->successResponse([
                'data' => $user,
                'message' => "Details Added Successfully!"
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
