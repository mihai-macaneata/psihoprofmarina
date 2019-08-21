<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <router-link class="navbar-brand" :to="{name: 'home'}">{{$store.state.siteTitle}}</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'home'}">Acasa</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'despremine'}">Despre mine</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>