<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="utf-8" />
        <title>Impromptu Tasks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Redfining how taks is done " name="description" />
        <link rel="shortcut icon" href="{{asset('images/favicon.ico') }}">

        <!-- App css -->
        <link rel="stylesheet" href="{{ asset('css/appcached.css') }}">
        <link rel="stylesheet" href="{{ asset('css/appburst.css') }}">

        <meta name="csrf-token" content="{{ csrf_token() }}">

    </head>

    <body>

        <!-- Begin page -->
        <div class="wrapper">

            @include('partials._notifications') 

            <div class="left-side-menu">

                <div class="slimscroll-menu" id="left-side-menu-container" style="background-color: #212529e8">

                    <!-- LOGO -->
                    <a href="index.html" class="logo text-center">
                        <span class="logo-sm">
                            <img src="{{ asset('images/basic.jpg') }}" alt="" height="16">
                        </span>
                    </a>

                    <!--- Sidemenu -->
                    <ul class="metismenu side-nav mt-4">

                        <li class="side-nav-title side-nav-item">Navigation</li>

                        <li class="side-nav-item">
                            <a href="javascript: void(0);" class="side-nav-link">
                                <i class="dripicons-meter"></i>
                                <span>Launch</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-second-level" aria-expanded="false">
                                <li>
                                    <a href="{{ route('home') }}"><i class="mdi mdi-rocket"></i> App</a>
                                </li>
                                <li>
                                    <a href="{{ route('admin.home') }}"><i class="mdi mdi-home-city"></i> Admin Home</a>
                                </li>
                            </ul>
                        </li>

                        <li class="side-nav-item">
                            <a href="javascript: void(0);" class="side-nav-link">
                                <span><i class="mdi mdi-account-heart-outline"></i>  Users and Roles </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-second-level" aria-expanded="false">
                                <li>
                                    <a href="{{ route('users.index') }}">All users</a>
                                </li>
                                  <li>
                                    {{-- <a href="{{ route('roles.index') }}">Manage Roles</a> --}}
                                </li>
                            </ul>
                        </li>

                        <li class="side-nav-item">
                            <a href="javascript: void(0);" class="side-nav-link">
                                <i class="dripicons-view-apps"></i>
                                <span>Tasks & Sub Tasks</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-second-level" aria-expanded="false">
                                <li>
                                    <a href="{{ route('tasks.index') }}">Manage Tasks</a>
                                </li>
                            </ul>
                        </li>

                        <li class="side-nav-item">
                            <a href="javascript: void(0);" class="side-nav-link">
                                <i class="dripicons-copy"></i>
                                <span> Locations </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-second-level" aria-expanded="false">
                                <li>
                                    <a href="{{ route('countries.index') }}">Countries</a>
                                </li>
                                    <li>
                                    <a href="pages-login.html">Regions/states</a>
                                </li>
                                    <li>
                                    <a href="pages-login.html">cities</a>
                                </li>
                                {{-- <li class="side-nav-item">
                                    <a href="javascript: void(0);" aria-expanded="false">Manage Locations
                                        <span class="menu-arrow"></span>
                                    </a>
                                    <ul class="side-nav-third-level" aria-expanded="false">
                                        <li>
                                            <a href="pages-login.html">Countries</a>
                                        </li>
                                         <li>
                                            <a href="pages-login.html">Regions/states</a>
                                        </li>
                                         <li>
                                            <a href="pages-login.html">cities</a>
                                        </li>
                                    </ul>
                                </li> --}}
                            </ul>
                        </li>

                        <li class="side-nav-item">
                            <a href="javascript: void(0);" class="side-nav-link">
                                <i class="dripicons-browser"></i>
                                <span> Projects </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-second-level" aria-expanded="false">
                                <li>
                                    <a href="{{ route('project.all') }}">All Projects</a>
                                </li>
                                <li>
                                    <a href="{{ route('project.ongoing') }}">On going Project</a>
                                </li>
                                <li>
                                    <a href="{{ route('project.completed') }}">Completed Projects</a>
                                </li>
                                <li>
                                    <a href="{{ route('project.cancelled') }}">Cancelled Projects</a>
                                </li>
                                <li>
                                    <a href="{{ route('project.posted') }}">Posted Projects</a>
                                </li>
                                <li>
                                    <a href="{{ route('project.created') }}">Created Projects</a>
                                </li>
                            </ul>
                        </li>

                        {{-- <li class="side-nav-title side-nav-item mt-1">Components</li>

                        <li class="side-nav-item">
                            <a href="javascript: void(0);" class="side-nav-link">
                                <i class="dripicons-briefcase"></i>
                                <span> UI </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul class="side-nav-second-level" aria-expanded="false">
                                <li>
                                    <a href="ui-cards.html">Cards</a>
                                </li>
                                <li>
                                    <a href="ui-buttons.html">Buttons</a>
                                </li>
                                <li>
                                    <a href="ui-modals.html">Modals</a>
                                </li>
                                <li>
                                    <a href="ui-tabs.html">Tabs</a>
                                </li>
                                <li>
                                    <a href="ui-notifications.html">Notifications</a>
                                </li>
                                <li>
                                    <a href="ui-grid.html">Grid</a>
                                </li>
                                <li>
                                    <a href="ui-general.html">General</a>
                                </li>
                                <li>
                                    <a href="ui-typography.html">Typography</a>
                                </li>
                                <li>
                                    <a href="ui-icons.html">Icons</a>
                                </li>
                                <li>
                                    <a href="ui-spinners.html">Spinners</a>
                                </li>
                                <li>
                                    <a href="ui-dragula.html">Dragula</a>
                                </li>
                            </ul>
                        </li> --}}
                    </ul>

                    <div class="clearfix"></div>
                </div>
            </div>

            <div class="content-page">
                <div class="content">
                    <div class="navbar-custom">
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
                                            <span>Login</span>
                                        </a>
                                        @if (Route::has('register'))
                                            <a href="{{ route('register') }}" class="dropdown-item notify-item">
                                                <i class="mdi mdi-account-circle mr-1"></i>
                                                <span>Register</span>
                                            </a>
                                        @endif
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
                        
                        <button class="button-menu-mobile open-left disable-btn">
                            <i class="mdi mdi-menu"></i>
                        </button>
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

                @yield('content')
            </div>
        </div>

        <script src="{{ asset('js/appcached.js') }}"></script>
        <script src="{{ asset('js/appburst.js') }}"></script>
        <script src="{{ asset('js/custom.js') }}"></script>
        @yield('scripts')
    </body>
</html>
