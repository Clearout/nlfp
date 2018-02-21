<template>
    <div class="masthead">
        <b-container>
            <b-navbar toggleable type="light">
                <b-navbar-brand to="/">
                    <img src="../assets/logo.png" class="img-fluid pr-3" style="height: 44px;"
                         alt="Vue logo">
                </b-navbar-brand>
                <b-navbar-brand to="/" class="divider-vertical-left pl-3">
                    <b-navbar-text>NLFP</b-navbar-text>
                </b-navbar-brand>
            </b-navbar>
        </b-container>
    </div>
</template>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
    @import "../assets/main";

    .masthead {
        background-color: $white;
        border-bottom: 1px solid $gray-300;
        a.navbar-brand {
            color: $gray-500;
        }
    }

</style>

<script>
    export default {
        name: 'NavBar'
    }
</script>
