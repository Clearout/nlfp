<template>
    <div id="app">
        <app-nav/>
        <div class="content">
            <b-container>
                <router-view/>
            </b-container>
        </div>

    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'

    export default {
        name: 'App',
        components: {
            'app-nav': NavBar
        }
    }
</script>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
    @import "assets/main";
</style>
