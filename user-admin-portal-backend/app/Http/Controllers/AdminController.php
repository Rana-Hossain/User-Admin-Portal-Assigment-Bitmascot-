<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
class AdminController extends Controller
{
    //
    function addAdmin(Request $req)
    {

        $admin = new Admin;
        $admin->email = $req->input('email');
        $admin->password = Hash:: make( $req->input('password'));
        $admin->save();
        return $admin;
    }

    function adminLogin(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        $user = Admin:: where('email',$request->email)->first();
        $isvalid = true;
        if(!$user || !Hash::check($request->password,$user->password))
        {
            $isvalid = !$isvalid;
            //return "Not valid";
        }
        

        //return $user;
        return response()->json(['isvalid' => $isvalid, $user]);
    }
}
