<template>
  <div class="masthead">
    <b-container>
      <b-navbar toggleable type="dark">
        <b-navbar-brand to="/">
          <img src="../assets/logo.png" class="img-fluid pr-3" style="height: 44px;"
            alt="Vue logo">
        </b-navbar-brand>
        <b-navbar-brand to="/" class="divider-vertical-left pl-3">
          Dashboard
        </b-navbar-brand>
        <b-navbar-brand to="/search" class="divider-vertical-left pl-3">
          Search
        </b-navbar-brand>
        <b-navbar-brand to="/report" class="divider-vertical-left pl-3">
          Report
        </b-navbar-brand>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  @import "../assets/main";

  .masthead { 
    background-color: $white;
    border-bottom: 1px solid $gray-300;
    a.navbar-brand {
      color: gray;
    }
    a.navbar-brand:hover {      
      color:firebrick;
    }    
    a.navbar-brand:active {
      color:firebrick;
    }
    a.navbar-brand:focus {
      color:firebrick;
    }
  }
</style>