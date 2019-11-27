<?php
namespace App\Http\Controllers;

use App\Payment;
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

   
    
    protected function confirmPayment($data)
    {
        dd($data);
        if ($data->chargecode == 00 || $data->chargecode == 0 && $data->status == 'successful' && $data->currency == 'NGN') {
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
    /**
    * Obtain Rave callback information
    * @return void
    */
    public function callback()
    {
        $data = Rave::verifyTransaction(request()->txref);
        if ($this->paymentExist(request()->txref)) return "we have a;ready charged u for this transaction";
            
        return $this->confirmPayment($data->data);
        // return "home";
        dd($data->data); //0 is user_id 1 is project_id
       
        
    }

    protected function paymentExist($txref)
    {
        $payment = Payment::where('txref', $txref)->first();
        return $payment ? true : false;
    }

   
}

