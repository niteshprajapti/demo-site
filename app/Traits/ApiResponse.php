<?php

namespace App\Traits;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

trait ApiResponse
{
    /**
     * HTTP Status Code
     *
     * @var string
     */
    protected $statusCode = Response::HTTP_OK;

    /**
     * Get the HTTP Status Code
     *
     * @return string
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * Set the HTTP Status Code
     *
     * @param  string $statusCode
     * @return APIController
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
        return $this;
    }

    /**
     * Create JSON Response
     *
     * @param  array $data
     * @param  array=[] $headers
     * @return Response
     */
    public function response($data, $headers = [])
    {
        return response()->json($data, 200, $headers);
    }

    /**
     * Create Success JSON Response
     *
     * @param  array $data
     * @param  array=[] $headers
     * @return Response
     */
    public function successResponse($data = [], $headers = [])
    {
        $data["status"] = $this->getStatusCode();
        $data["success"] = true;
        $data = $data + [
            'message' => "Ok",
            'data' => []
        ];
        $data = array_merge(array_flip(array('status', 'success', 'message', 'data')), $data);

        return response()->json($data, $data["status"], $headers);
    }

    public function failResponse($data = [], $errorCode = 500, $headers = [])
    {
        $errorCode = $errorCode != 0 ? $errorCode : 500;
        $errorCode = ((intval($errorCode) > 599 || intval($errorCode) < 100) ? 500 : intval($errorCode));
        $this->setStatusCode($errorCode);
        $data["status"] = $errorCode;
        $data["success"] = false;
        $data = $data + [
            'message' => 'Something Went Wrong!',
            'messages' => []
        ];
        $data = array_merge(array_flip(array('status','success', 'message', 'messages')), $data);
        return response()->json($data, $this->getStatusCode(), $headers);
    }
}
