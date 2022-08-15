<template>
    <div id="chatContainer" class="chatContainer">
        <!--<div id="rt-e08c1cbc5b3d5c1d26b15d59db6d3860"></div> -->
        <!--<iframe class="chat-embed" src="https://titanembeds.com/embed/941336136566071387?css=128&?defaultchannel=941336138302521446&theme=IceWyvern&userscalable=false" frameborder="0"></iframe>-->
        

         <iframe src="https://e.widgetbot.io/channels/941336136566071387/941336138302521446" height="600" width="800"></iframe>
    </div>
</template>

<style>
    .chatContainer,
    .chatContainer iframe,
    .chat-embed,
    .rumbletalk-embed {
        width: 100% !important;
        height: 100% !important;
    }

</style>

<script>
    module.exports = {
        props:{

        },
        name: 'Chat',
        data: function() {
            return {
                legacySystemHTML: `  
                    <widgetbot
                        server="941336136566071387"
                        channel="941347400516247563"
                    ></widgetbot>`
            }
        },

        methods: {

        },
        ready: function () {

        }
    }
</script>