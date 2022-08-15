<template>
    <div id="watchRoomContainer">
        <iframe id="watchIframe" src="https://www.watch2gether.com/rooms/thevirtualplaza-7njloho00gwepapdxr?app=1" frameborder="0" ></iframe>
    </div>
</template>

<style>
    #watchRoomContainer,
    #watchIframe {
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
        name: 'WatchRoomApp',
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