<div class="jq-toast-single jq-icon-danger" role="alert"  style="width: 300px; position: fixed; left: 45%; top: 70px; z-index: 999; display: flex;">

    <i class="mr-2 mdi mdi-heart-broken-outline" style="font-size: 30px"></i>
    <span style="right: 0" class="close-jq-toast-single">×</span>
    <div>
        @foreach ($errors->all() as $error)
            <div>The name field must be unique </div>
            <div>{{ $error }}</div>
        @endforeach
    </div>

</div>
