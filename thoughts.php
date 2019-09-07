as it turns out, type casting is not so good cos it creates a column for the array by itself
However using json_encode and then decode and then using true to force the newly php variable to be an array instead of an object is cool
like json_decode(json_encode($array), true) without the true an object is returned back. okay

also array filter is useful but not so useful cos in d end i have to tell it whether something is true of flase

I have successfully create a task<

There are two things to move on too

first would be to create a notification system for most activites
    each process will have its own notification class that sens a tiny notifs
    considering both database and emal

second would be to create the task and sub task page
so someone can assit me to upload task and subtasks

i think its better i do that first so that i can work on something else while someone assit in doing that

///////things to still implements
    allow people to create a task sub category,
    if anyone cant find its address he or she should do well to specify his closest adress in the adress bar

///////
git merge
be where u want to merge to
git merge whereumergingfrom

next course of action
    guard all the admin sections since we putting it online
    users must be signed in and is admin
    before the end of the weekend.
