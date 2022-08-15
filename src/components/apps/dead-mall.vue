<template>
    <div id="deadMallContainer">
        <iframe class="deadMallFrame" src="https://i.simmer.io/@neonSunsetStyle/dead-mall-simulator"></iframe>
    </div>
</template>

<style>
    #deadMallContainer,
    .deadMallFrame {
        width: 100%;
        height: 100%;
    }
</style>

<script>
    module.exports = {
        props:{
            app:true
        },
        components: {

        },
        name: 'DeadMallApp',
        data: function() {
            return {

            }
        },

        methods: {

        },
        ready: function () {
            
        }
    }
</script>