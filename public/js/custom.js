


function setErrorMess(message){
    let errorDiv = $('#postErrMess');
    errorDiv.html('').append("<span>" + message + "</span><br>");;
    return $("#postingModal").modal('toggle');
}

function postProject(target, model) {
    if (model == "onsite") {
        if ($("#countryModalButton").text() == "Select Country") return setErrorMess('Select the country where your task will be done ');
        if ($("#regionModalButton").text() == "Select Region") return setErrorMess('Select the Region/State where your task will be done ');
        if ($("#cityModalButton").text() == "Select City") return setErrorMess('Select the City where your task will be done ');
        if ($("#location").val().length < 10) return setErrorMess("Address must be more than 10 characters");
    }
    if ($("#task_title").val().length < 10) return setErrorMess("Task title must be more than 10 characters");
    if ($("#description").val().length < 100) return setErrorMess("Task description must be more than 100 characters");
    if ($("#fredSubTaskSelectionModalButton").text() == "Select a sub task") return setErrorMess("Select a Sub Task");
    if ($("#fredTaskDurationModalButton").text() == "Select Task duration") return setErrorMess('Select your Task Duration');
    if ($("#fredDateModalButton").text() == "Select Start Date") return setErrorMess('Select when you would like to start your task');


    $(target).siblings('form').submit();
    // window.location.href = "/projects/" + project_id + "/post/true";
}

function updateTaskModel(target, field) {
    $('#taskModelModalButton').text($('#model :selected').text());
    updateProject(target, field);
    window.location.reload();
}

function updateCountry(target, field) {
    $('#countryModalButton').text($('#country_id :selected').text());
    $('#region_id, #city_id').html('Select country to see regions');
    $('#regionModalButton').text('Select Region');
    $('#cityModalButton').text('Select City');
    updateProject(target, field);
    return $("#countryModal, #regionModal").modal('toggle');
}

function updateRegion(target, field) {
    $('#regionModalButton').text($('#region_id :selected').text());
    $('#city_id').html('Select a region to see cities');
    $('#cityModalButton').text('Select City');
    updateProject(target, field);
    return $("#cityModal, #regionModal").modal('toggle');
}

function updateCity(target, field) {
    $('#cityModalButton').text($('#city_id :selected').text());
    updateProject(target, field);
    return $("#cityModal").modal('toggle');
}

function deleteFile(target, file_id) {
    $.ajax({
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        method: 'DELETE',
        url: '/project/photos/' + file_id,
        success: function (response) {
            $(target).parent().fadeOut();
            $(target).parent().removeClass('d-flex');
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

function updateTask(target, field) {
    $('#fredTaskSelectionModalButton').text($('#task_id :selected').text());
    $('#sub_task_id').html('Select a task to see sub tasks');
    updateProject(target, field);
    return $("#fredCategoryModal, #fredSubCategoryModal").modal('toggle');
}

function updateTaskDuration(target, field) {
    $('#fredTaskDurationModalButton').text($('#duration :selected').text());
    updateProject(target, field);
    return $("#fredTaskDurationModal").modal('toggle');
}

function updateTaskStartDate(target, field) {
    $('#fredDateModalButton').text($('#start_date').val());
    updateProject(target, field);
    return $("#fredDateModal").modal('toggle');
}

function updateTaskMasterNumber(target, field) {
    $('#frednumberButton').text($('#num_of_taskMaster :selected').text());
    updateProject(target, field);
    return $("#frednumber").modal('toggle');
}

function updateSubtask(target, field) {
    $('#fredSubTaskSelectionModalButton').text($('#sub_task_id :selected').text());
    updateProject(target, field);
    return $("#fredSubCategoryModal").modal('toggle');
}

function updateProject(target, field) {
    let value = $(target).val();
    $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        method: 'PUT',
        url: '/project/ajax/' + project_id,
        data: {value: value, field:field},
        success: function(response){
            if (field == "region_id") {
                $('#city_id').append('<option value="0">Select City</option>')
                for (var i = response.length - 1; i >= 0; i--) {
                    $('#city_id').append('<option value="' + response[i].id + '">' + response[i].name + '</option>')
                }
            }

            if (field == "country_id") {
                $('#region_id').append('<option value="0">Select Region/State</option>')
                for (var i = response.length - 1; i >= 0; i--) {
                    $('#region_id').append('<option value="' + response[i].id + '">' + response[i].name + '</option>')
                }
            }

            if (field == "task_id") {
                $('#sub_task_id').append('<option value="0">Make sub task</option>')
                for (var i = response.length - 1; i >= 0; i--) {
                    $('#sub_task_id').append('<option value="' + response[i].id + '">' + response[i].name + '</option>')
                }
            }
            return;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            return $(target).val('Select Task');
        }
    });
}

