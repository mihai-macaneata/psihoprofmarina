<template>
        <header class="header">
            <div class="container">
                <b-nav>
                    <b-nav-item class="nav-item">
                        <router-link class="nav-link" :to="{name: 'home'}">Acasa</router-link>
                    </b-nav-item>
                    <b-nav-item class="nav-item">
                        <router-link class="nav-link" :to="{name: 'despremine'}">Despre mine</router-link>
                    </b-nav-item>
                    <b-nav-item class="nav-item">
                        <a class="nav-link" href="#appointment">Fa programare</a>

                    </b-nav-item>
                </b-nav>
             
            </div><!-- end container -->
        </header><!-- end header -->

</template>