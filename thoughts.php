as it turns out, type casting is not so good cos it creates a column for the array by itself
However using json_encode and then decode and then using true to force the newly php variable to be an array instead of an object is cool
like json_decode(json_encode($array), true) without the true an object is returned back. okay

also array filter is useful but not so useful cos in d end i have to tell it whether something is true of flase

I have successfully create a task< There are two things to move on too first would be to create a notification system for most activites each process will have its own notification class that sens a tiny notifs considering both database and emal second would be to create the task and sub task page so someone can assit me to upload task and subtasks i think its better i do that first so that i can work on something else while someone assit in doing that ///////things to still implements allow people to create a task sub category, if anyone cant find its address he or she should do well to specify his closest adress in the adress bar /////// git merge be where u want to merge to git merge whereumergingfrom next course of action guard all the admin sections since we putting it online users must be signed in and is admin before the end of the weekend. next course of action i need to sort my assets css, js and all ssh -p 65002 u744829203@2.57.89.52 //ssh into the account <!-- ob the 12th of seot 2019 -->
    have a button that says all taks on top of the edit page
    in the controller use array filter to section the projects into posted and completed, ongoing -- started date
    let the deletion of post escape through the checks
    probably consider soft deletes
    ONly fetch posts that doesnt have the status = cancelled
    fix all the required classes in the notification class
    finally decide what the email will look like
    Create a notification view page for viewing all and mark all as read when this page is visited

    next push to live so i can uploads tasks and subtasks
    work on where people get to see tasks
    then work on applyiing for tasks

    sept 14th
    task 1 -- on the homepage when a guest login he should see getstarted, taskmaster should see hire, while that should see apply for tasks
    sort the policy issue


    8** find a solution to the phone issue

    task application

    get notification ----task applied to master admin
    i will have a one to many between a project and task master ...........many task master can apply for a project


    php artisan migrate:refresh --path=/database/migrations/2019_07_21_191541_create_projects_table.php

    develop the list of freelancer based on the task id that a task giver click on 