<template>
        <header class="header">
            <div class="container">
                <nav class="navbar navbar-inverse navbar-toggleable-md">
                    <div class="collapse navbar-collapse" id="matildamenu">
                        <ul class="navbar-nav">
                            <li class="nav-item active dropdown has-submenu">
                                <router-link class="nav-link" :to="{name: 'home'}">Acasa</router-link>
                            </li>
                            <li class="nav-item">
                               <router-link class="nav-link" :to="{name: 'despremine'}">Despre mine</router-link>
                            </li>
                            <li class="nav-item">
                               <router-link class="nav-link" :to="{name: 'programare'}">Fa programare</router-link>

                            </li>
                        </ul>

                        <div class="nav navbar-nav ml-auto hidden-md-down hidden-sm-down hidden-xs-down">
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>              
                        </div>
                    </div>
                </nav>
            </div><!-- end container -->
        </header><!-- end header -->

</template>