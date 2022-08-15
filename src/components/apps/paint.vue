<template>
    <div id="paintContainer">
        <iframe id="paintIframe" src="https://witeboard.com/478413d0-af64-11ea-b526-6d503d405ca9"></iframe>
    </div>
</template>

<style>
    #paintContainer,
    #paintIframe {
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
        name: 'PaintApp',
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