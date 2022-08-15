<template>
    <div id="chatAppContainer">
        <Chat />
    </div>
</template>

<style>
    #chatAppContainer {
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
            Chat: require('../chat/chat.vue')
        },
        name: 'ChatApp',
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