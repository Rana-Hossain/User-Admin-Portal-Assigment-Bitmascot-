<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    function registerUser(Request $req)
    {
        $user = new User;
        $user->first_name = $req->input('first_name');
        $user->last_name = $req->input('last_name');
        $user->address = $req->input('address');
        $user->phone = $req->input('phone');
        $user->email = $req->input('email');
        $user->birthdate = $req->input('birthdate');
        $user->password = Hash:: make( $req->input('password'));
        $user->save();
        return response()->json(['isvalid' => $isvalid, $user]);
        //return $user; 
    }

    function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        $user = User:: where('email',$request->email)->first();
        $isvalid = true;
        if(!$user || !Hash::check($request->password,$user->password))
        {
            $isvalid = !$isvalid;
            //return "Not valid";
        }
        

        //return $user;
        return response()->json(['isvalid' => $isvalid, $user]);
    }

    function checkEmailUnique(Request $request)
    {
        
        $email = $request->input('email');
        $isUnique = !User::where('email', $email)->exists();
        
        //return response()->json([$email]);
        return response()->json(['isUnique' => $isUnique]);
    }

    function userlist()
    {
        return User:: all();
    }

    function search($key)
    {
        return User :: where('first_name','Like',"%$key%")->get();
    }
}
