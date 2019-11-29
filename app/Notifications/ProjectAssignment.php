<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;


class ProjectAssignment extends Notification implements ShouldQueue
{
    use Queueable;
    private $project_id;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($project_id)
    {
        $this->project_id = $project_id;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->greeting('Hi ' . $notifiable->name . ",")
            ->line('This is to notify you that a new Task been assigned to you on our platform, Click the button below or log in to your profile to accept the task')
            ->line('After accepting the task, we will contact you for details')
            ->action('I accept the task', route("project.accept", $this->project_id))
            ->line('Thanks for using impromptuTasks!');
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
            'title' => "Hi, A Task has been assigned to you",
            'subject' => 'This is to notify you that a new Task has been assigned to you, Visit your profile to accept the task and start earning '
        ];
    }
}