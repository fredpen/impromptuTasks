<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;

class ProjectCancelled extends Notification implements ShouldQueue
{
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'title' => "Your Project has been Deleted",
            'subject' => 'This is to notify you that one of your project has been deleted '
        ];
    }
}
