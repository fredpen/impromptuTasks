<?php

namespace App\Helpers;


class ResponseHelper
{
    public static function sendSuccess($data)
    {
        $response = [
            'statusCode' => 200,
            'statusMessage' => 'success',
            'data' => $data
        ];
        return response()->json($response, 200);
    }
    
    public static function notFound()
    {
        $response = [
            'statusCode' => 404,
            'statusMessage' => 'Resources not available',
        ];
        return response()->json($response, 404);
    }
    
    public static function unAuthorised()
    {
        $response = [
            'statusCode' => 401,
            'statusMessage' => 'Unauthorised',
        ];
        return response()->json($response, 401);
    }
   
    public static function badRequest($message)
    {
        $response = [
            'statusCode' => 400,
            'statusMessage' => $message
        ];
        return response()->json($response, 400);
    }
    
    public static function serverError()
    {
        $response = [
            'statusCode' => 500,
            'statusMessage' => 'Internal server error'
        ];
        return response()->json($response, 500);
    }
}