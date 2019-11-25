<?php
namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

//use the Rave Facade
use Rave;

class RaveController extends Controller
{
   
    
    public function __construct()
    {
        $this->middleware(['auth', 'isActive']);
    }
    
    /**
    * Initialize Rave payment process
    * @return void
    */
    public function payment(Project $project) 
    {
        return view('projects.payment', [
            'project' => $project,
            'metaData' => [
                array('metaname' => 'user_Id', 'metavalue' => $project->owner->id),
                array('metaname' => 'project_Id', 'metavalue' => $project->id)
            ]
        ]);
    }
    
    public function initialize()
    {
        //This initializes payment and redirects to the payment gateway
        //The initialize method takes the parameter of the redirect URL
        Rave::initialize(route('callback'));
    }
    
    /**
    * Obtain Rave callback information
    * @return void
    */
    public function callback()
    {
        
        $data = Rave::verifyTransaction(request()->txref);
        
        dd($data);
        // Get the transaction from your DB using the transaction reference (txref)
        // Check if you have previously given value for the transaction. If you have, redirect to your successpage else, continue
        // Comfirm that the transaction is successful
        // Confirm that the chargecode is 00 or 0
        // Confirm that the currency on your db transaction is equal to the returned currency
        // Confirm that the db transaction amount is equal to the returned amount
        // Update the db transaction record (includeing parameters that didn't exist before the transaction is completed. for audit purpose)
        // Give value for the transaction
        // Update the transaction to note that you have given value for the transaction
        // You can also redirect to your success page from here
        
    }
}

