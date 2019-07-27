<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="utf-8" />
        <title>Impromptu Tasks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Redfining how taks is done " name="description" />
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- App css -->
        <link rel="stylesheet" href="{{ asset('css/all.css') }}">
        <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">

    </head>

    <body data-layout="topnav" style="min-height: 100vh;">

        <!-- Begin page -->
        <div class="wrapper">

            <div class="content-page">
                <div class="content">
                  <div class="navbar-custom topnav-navbar">
                        <div class="container-fluid">

                            <!-- LOGO -->
                            <a href="route" id="fred-logo" class="topnav-logo">
                                    <img src="{{ asset('images/basic.jpg') }}" alt="" height="16">
                            </a>

                            <ul class="list-unstyled topbar-right-menu float-right mb-0">

                                {{-- <li class="dropdown"> <button type="button" class="py-1 px-1 btn btn-danger">Post Task</button></li> --}}


                                <li class="dropdown notification-list">

                                    <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" id="topbar-notifydrop" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i class="dripicons-bell noti-icon"></i>
                                        <span class="noti-icon-badge"></span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg" aria-labelledby="topbar-notifydrop">

                                        <!-- item-->
                                        <div class="dropdown-item noti-title">
                                            <h5 class="m-0">
                                                <span class="float-right">
                                                    <a href="javascript: void(0);" class="text-dark">
                                                        <small>Clear All</small>
                                                    </a>
                                                </span>Notification
                                            </h5>
                                        </div>

                                        <div class="slimscroll" style="max-height: 230px;">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                                <div class="notify-icon bg-primary">
                                                    <i class="mdi mdi-comment-account-outline"></i>
                                                </div>
                                                <p class="notify-details">Caleb Flakelar commented on Admin
                                                    <small class="text-muted">1 min ago</small>
                                                </p>
                                            </a>
                                        </div>

                                        <!-- All-->
                                        <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                                            View All
                                        </a>

                                    </div>
                                </li>

                                <li class="dropdown notification-list">
                                    <a class="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" href="#" role="button" aria-haspopup="true"
                                        aria-expanded="false">
                                        @guest
                                            <span class="">
                                                <i class="mdi mdi-account-plus"></i>Account
                                            </span>
                                        @else
                                            <span class="account-user-avatar">
                                                <img src="{{ asset('images/basic.jpg') }}" alt="user-image" class="rounded-circle">
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
                                                <i class="mdi mdi-account-circle mr-1"></i>
                                                <span>Login</span>
                                            </a>
                                            @if (Route::has('register'))
                                                <a href="{{ route('register') }}" class="dropdown-item notify-item">
                                                    <i class="mdi mdi-account-circle mr-1"></i>
                                                    <span>Register</span>
                                                </a>
                                            @endif
                                        @else
                                            <a href="{{ route('register') }}" class="dropdown-item notify-item">
                                                <i class="mdi mdi-account-circle mr-1"></i>
                                                <span>Profile</span>
                                            </a>
                                            <a href="{{ route('logout') }}" class="dropdown-item notify-item"
                                                onclick="event.preventDefault();
                                                                     document.getElementById('logout-form').submit();">
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
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-speedometer mr-1"></i>Dashboards <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-dashboards">
                                                <a href="index.html" class="dropdown-item">Ecommerce</a>
                                                <a href="dashboard-crm.html" class="dropdown-item">CRM</a>
                                                <a href="dashboard-projects.html" class="dropdown-item">Projects</a>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-apps mr-1"></i>Apps <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-apps">
                                                <a href="apps-calendar.html" class="dropdown-item">Calendar</a>
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-project" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Projects <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-project">
                                                        <a href="apps-projects-list.html" class="dropdown-item">List</a>
                                                        <a href="apps-projects-details.html" class="dropdown-item">Details</a>
                                                    </div>
                                                </div>
                                                <a href="apps-tasks.html" class="dropdown-item">Tasks</a>
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ecommerce" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        eCommerce <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-ecommerce">
                                                        <a href="apps-ecommerce-products.html" class="dropdown-item">Products</a>
                                                        <a href="apps-ecommerce-products-details.html" class="dropdown-item">Products Details</a>
                                                        <a href="apps-ecommerce-orders.html" class="dropdown-item">Orders</a>
                                                        <a href="apps-ecommerce-orders-details.html" class="dropdown-item">Order Details</a>
                                                        <a href="apps-ecommerce-customers.html" class="dropdown-item">Customers</a>
                                                        <a href="apps-ecommerce-shopping-cart.html" class="dropdown-item">Shopping Cart</a>
                                                        <a href="apps-ecommerce-checkout.html" class="dropdown-item">Checkout</a>
                                                        <a href="apps-ecommerce-sellers.html" class="dropdown-item">Sellers</a>
                                                    </div>
                                                </div>
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
                                                        <a href="pages-login.html" class="dropdown-item">Login</a>
                                                        <a href="pages-login-2.html" class="dropdown-item">Login 2</a>
                                                        <a href="pages-register.html" class="dropdown-item">Register</a>
                                                        <a href="pages-register-2.html" class="dropdown-item">Register 2</a>
                                                        <a href="pages-logout.html" class="dropdown-item">Logout</a>
                                                        <a href="pages-logout-2.html" class="dropdown-item">Logout 2</a>
                                                        <a href="pages-recoverpw.html" class="dropdown-item">Recover Password</a>
                                                        <a href="pages-recoverpw-2.html" class="dropdown-item">Recover Password 2</a>
                                                        <a href="pages-lock-screen.html" class="dropdown-item">Lock Screen</a>
                                                        <a href="pages-lock-screen-2.html" class="dropdown-item">Lock Screen 2</a>
                                                        <a href="pages-confirm-mail.html" class="dropdown-item">Confirm Mail</a>
                                                        <a href="pages-confirm-mail-2.html" class="dropdown-item">Confirm Mail 2</a>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-error" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Error <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-error">
                                                        <a href="pages-404.html" class="dropdown-item">Error 404</a>
                                                        <a href="pages-404-alt.html" class="dropdown-item">Error 404-alt</a>
                                                        <a href="pages-500.html" class="dropdown-item">Error 500</a>
                                                    </div>
                                                </div>
                                                <a href="pages-starter.html" class="dropdown-item">Starter Page</a>
                                                <a href="pages-profile.html" class="dropdown-item">Profile</a>
                                                <a href="pages-invoice.html" class="dropdown-item">Invoice</a>
                                                <a href="pages-faq.html" class="dropdown-item">FAQ</a>
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
                                                <a href="layouts-light-sidenav.html" class="dropdown-item">Light Sidenav</a>
                                                <a href="layouts-collapsed.html" class="dropdown-item">Collapsed Menu</a>
                                                <a href="javascript: void(0);" class="dropdown-item right-bar-toggle">Right Sidebar</a>
                                                <a href="layouts-boxed-vertical.html" class="dropdown-item">Boxed Vertical</a>
                                                <a href="layouts-boxed-horizontal.html" class="dropdown-item">Boxed Horizontal</a>
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
                                                        <a href="ui-cards.html" class="dropdown-item">Cards</a>
                                                        <a href="ui-buttons.html" class="dropdown-item">Buttons</a>
                                                        <a href="ui-modals.html" class="dropdown-item">Modals</a>
                                                        <a href="ui-tabs.html" class="dropdown-item">Tabs</a>
                                                        <a href="ui-notifications.html" class="dropdown-item">Notifications</a>
                                                        <a href="ui-grid.html" class="dropdown-item">Grid</a>
                                                        <a href="ui-general.html" class="dropdown-item">General</a>
                                                        <a href="ui-typography.html" class="dropdown-item">Typography</a>
                                                        <a href="ui-icons.html" class="dropdown-item">Icons</a>
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
                                                        <a href="form-advanced.html" class="dropdown-item">Form Advanced</a>
                                                        <a href="form-validation.html" class="dropdown-item">Validation</a>
                                                        <a href="form-wizard.html" class="dropdown-item">Wizard</a>
                                                        <a href="form-fileuploads.html" class="dropdown-item">File Uploads</a>
                                                        <a href="form-editors.html" class="dropdown-item">Editors</a>
                                                    </div>
                                                </div>
                                                <div class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Charts <div class="arrow-down"></div>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="topnav-charts">
                                                        <a href="charts-chartjs.html" class="dropdown-item">Chartjs</a>
                                                        <a href="charts-brite.html" class="dropdown-item">Britecharts</a>
                                                        <a href="charts-apex-line.html" class="dropdown-item">Apex Charts</a>
                                                        <a href="charts-sparkline.html" class="dropdown-item">Sparklines</a>
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
                                            <a class="nav-link" href="{{ route('projects.create') }}" id="topnav-layouts" role="button">
                                                <span class="text-white bg-danger px-2 py-1">Post Task</span>
                                            </a>
                                        </li>
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
        <script src="{{ asset('js/all.js') }}"></script>
        @yield('scripts')
    </body>
</html>

