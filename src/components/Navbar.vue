<template>
    <b-navbar>   
        <template slot="brand"> 
            <router-link :to="{name: 'Index'}">
                <img class="resize" alt="logo" src="../assets/logo.png">         
            </router-link>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-light">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        <strong>Log in</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resize{
    width:350px;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding:5px 0px 5px 5px;
}

@media only screen and (max-width: 600px){

}
</style>
