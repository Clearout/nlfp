<template>
    <div class="masthead">
        <b-container>
            <b-navbar toggleable type="light">
                <b-navbar-brand to="/">
                    <img src="../assets/dsb_logo.svg" class="img-fluid pr-3" alt="DSB logo">
                </b-navbar-brand>
                <b-navbar-brand to="/" class="divider-vertical-left pl-3">
                    <b-navbar-text>NLFP Admin</b-navbar-text>
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
