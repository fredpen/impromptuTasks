<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Impromptu Tasks</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Redfining how taks is done " name="description" />
    <link rel="shortcut icon" href="{{ asset('images/basic.png') }}">
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- App css -->
    <link rel="stylesheet" href="{{ asset('css/appcached.css') }}">
    <link rel="stylesheet" href="{{ asset('css/appburst.css') }}">
    
    @yield('styles') 

</head>

    <body data-layout="topnav" style="min-height: 100vh;">

        @include('partials._notifications')
        <!-- Begin page -->
        <div  id="appp" class="wrapper">

            <div class="content-page">
                <div class="content">
                  <div class="navbar-custom topnav-navbar">
                        <div class="container-fluid">

                            <!-- LOGO -->
                            <a href="{{ route('home') }}" id="fred-logo" class="topnav-logo">
                                
                                <img title="Home" alt="Home" src="{{ asset('images/basic.png') }}" alt="impromptutasks.com" height="32">
                            </a>



                            <ul class="list-unstyled topbar-right-menu float-right mb-0">
                                <li class="dropdown notification-list">

                                    <a class="nav-link dropdown-toggle arrow-none" 
                                        data-toggle="modal" 
                                        href="#" 
                                        id="topbar-notifydrop" 
                                        role="button" 
                                        data-target="#scrollable-modal" 
                                        aria-haspopup="true" 
                                        aria-expanded="false">
                                        <i class="dripicons-bell noti-icon"></i>
                                        <span class="noti-icon-badge"></span>
                                        @if (Auth::check() && Auth::user()->unreadNotifications)
                                            {{count(Auth::user()->unreadNotifications)}}
                                        @endif
                                    </a>
                                </li>

                                <li class="dropdown notification-list">
                                    <a class="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                          
                                        @guest
                                            <span class="account-user-avatar">
                                                <img src="{{ asset('images/basic.jpg') }}" alt="register avatar" class="rounded-circle">
                                            </span>
                                            <span>
                                                <span class="account-user-name">Account</span>
                                                <span class="account-position">Register/Login</span>
                                            </span>
                                        @else
                                            <span class="account-user-avatar">
                                                <img src="{{ Auth::User()->imageurl ? asset('images/'.Auth::User()->imageurl)  : asset('images/basic.jpg') }}" alt="{{Auth::User()->name}}" class="rounded-circle">
                                            </span>
                                            <span>
                                                <span class="account-user-name">{{ Auth::User()->name }} </span>
                                                <span class="account-position">Joined {{ Auth::User()->created_at->diffForHumans() }} </span>
                                            </span>
                                        @endguest

                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
                                        @guest
                                            <a href="{{ route('login') }}" class="dropdown-item notify-item">
                                                <i class="mdi mdi-login mr-1"></i>
                                                <span>Login/Register</span>
                                            </a>
                                        @else
                                            <a href="{{ route('account.show', Auth::User()->id) }}" class="dropdown-item notify-item">
                                                <i class="mdi mdi-account-circle mr-1"></i>
                                                <span>My Profile</span>
                                            </a>

                                            <a class="dropdown-item notify-item" 
                                                data-toggle="modal" 
                                                href="#" 
                                                role="button" 
                                                data-target="#scrollable-modal" 
                                                aria-haspopup="true" 
                                                aria-expanded="false">
                                                <i class="mdi mdi-bell-ring mr-1"></i>
                                                <span class="noti-icon-badge"></span>
                                                <span>My Messages</span>(
                                                <small class="text-danger">
                                                    @if (Auth::check() && Auth::user()->unreadNotifications)
                                                        {{count(Auth::user()->unreadNotifications)}}
                                                    @endif
                                                </small>)
                                            </a>
                                            
                                            <a href="{{ route('logout') }}" class="dropdown-item notify-item"
                                                onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                                <i class="mdi mdi-login mr-1"></i>
                                                    {{ __('Logout') }}
                                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                    @csrf
                                                </form>
                                            </a>
                                        @endguest
                                    </div>
                                </li>
                            </ul>
                            <a class="navbar-toggle"  data-toggle="collapse" data-target="#topnav-menu-content">
                                <div class="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>


                            <div class="app-search">
                                   
                                <form>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search...">
                                        <span class="mdi mdi-magnify"></span>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="submit">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="topnav">
                        <div class="container-fluid">
                            <nav class="navbar navbar-dark navbar-expand-lg topnav-menu">

                                <div class="collapse navbar-collapse" id="topnav-menu-content">
                                    <ul class="navbar-nav">
                                        <li class="nav-item ">
                                            <a class="nav-link dropdown-toggle arrow-none" href="{{ route('projects.index') }}" id="topnav-apps" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Home
                                            </a>
                                        </li>

                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-speedometer mr-1"></i>Tasks <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-dashboards">
                                                <a href="{{ route('projects.index') }}" class="dropdown-item">All Tasks</a>
                                            </div>
                                        </li>

                                        

                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-google-pages mr-1"></i>Pages <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-pages">
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Authenitication <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-auth">
                                                        <a href="pages-confirm-mail-2.html" class="dropdown-item">Confirm Mail 2</a>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-error" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Error <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-error">
                                                        <a href="pages-500.html" class="dropdown-item">Error 500</a>
                                                    </div>
                                                </div>
                                                <a href="pages-pricing.html" class="dropdown-item">Pricing</a>
                                                <a href="pages-maintenance.html" class="dropdown-item">Maintenance</a>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layouts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-buffer mr-1"></i>Layouts <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-layouts">
                                                <a href="layouts-horizontal.html" class="dropdown-item">Horizontal</a>
                                                <a href="layouts-scrollable-sidenav.html" class="dropdown-item">Scrollable Sidenav</a>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-briefcase-outline mr-1"></i>Components <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-components">
                                                <a href="widgets.html" class="dropdown-item">Widgets</a>
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ui-kit" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        UI Elements <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-ui-kit">
                                                        <a href="ui-spinners.html" class="dropdown-item">Spinners</a>
                                                        <a href="ui-dragula.html" class="dropdown-item">Dragula</a>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-forms" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Forms <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-forms">
                                                        <a href="form-elements.html" class="dropdown-item">Basic Elements</a>
                                                      
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Charts <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-charts">
                                                        <a href="charts-chartjs.html" class="dropdown-item">Chartjs</a>
                                                    
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-tables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Tables <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-tables">
                                                        <a href="tables-basic.html" class="dropdown-item">Basic Tables</a>
                                                        <a href="tables-datatable.html" class="dropdown-item">Data Tables</a>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-maps" role="button" data-toggle="dropdown" aria-expanded="false">
                                                        Maps <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-maps">
                                                        <a href="maps-google.html" class="dropdown-item">Google Maps</a>
                                                        <a href="maps-vector.html" class="dropdown-item">Vector Maps</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="nav-item">
                                            @if (Auth::check() && Auth::user()->isTaskMaster())
                                                <a class="nav-link" href="{{ route('myTasks') }}" id="topnav-layouts" role="button">
                                                    <span class="text-nowrap text-white bg-danger px-2 py-1">My Tasks</span>
                                                </a>
                                            @else
                                                <a class="nav-link" href="{{ route('projects.create') }}" id="topnav-layouts" role="button">
                                                    <span class="text-nowrap text-white bg-danger px-2 py-1">Post Task</span>
                                                </a>
                                            @endif
                                        </li>

                                        @if (Auth::check() && Auth::user()->role_id === 0)
                                            <li class="nav-item">
                                                <a class="nav-link" href="{{ route('admin.home') }}" id="topnav-layouts" role="button">
                                                    <span class="text-white bg-danger px-2 py-1">Admin</span>
                                                </a>
                                            </li>
                                        @endif

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    @yield('content')
                </div>

                <!-- Footer Start -->
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                2018 - 2019 © Impromptutasks.com
                            </div>
                            <div class="col-md-6">
                                <div class="text-md-right footer-links d-none d-md-block">
                                    <a href="javascript: void(0);">About</a>
                                    <a href="javascript: void(0);">Support</a>
                                    <a href="javascript: void(0);">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
       
        
    </body>
    <script src="{{ asset('js/lib.js') }}" ></script>
    <script src="{{ asset('js/app.js') }}" ></script>
    
    
    @yield('scripts')
</html>

