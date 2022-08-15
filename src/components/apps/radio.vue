<template>
    <div id="radioContainer">
        <div class="iFrameContainer">
            <div id="radioIFrame"></div>
        </div>
        <div class="controlContainer">
            <button class="flex-button" @click="playPrevious"> 
                <i class="material-icons">skip_previous</i>
            </button>

            <button class="flex-button" @click="togglePlay"> 
                <i class="material-icons" v-if="playerIsPlaying">pause</i>
                <i class="material-icons" v-else>play_arrow</i>
            </button>
            <button class="flex-button" @click="playNext"> 
                <i class="material-icons">skip_next</i>
            </button>
            <button class="flex-button" @click="togglePlaylistMenu"> 
                <i class="material-icons">playlist_play</i>
            </button>
            
            <div class="playlistMenuContainer">
                <div
                    v-if="playlistMenu"
                    class="playlistMenuPopup"
                >

                    <h4 class="mx-1">Playlist:</h4><br /> 

                    <div class="playlistButton">
                        <label for="default"><input type="radio" v-model="selectedPlaylist" id="default" value="default">The Virtual Plaza</label>
                    </div>
                    <div class="playlistButton">
                        <label for="mallsoft"><input type="radio" v-model="selectedPlaylist" id="mallsoft" value="mallsoft">Dead Mall</label>
                    </div>
                    <div class="playlistButton">
                        <label for="futureFunk"><input type="radio" v-model="selectedPlaylist" id="futureFunk" value="futureFunk">Future Funky</label>
                    </div>
                    <div class="playlistButton">
                        <label for="synthwave"><input type="radio" v-model="selectedPlaylist" id="synthwave" value="synthwave">Neon Highway</label>
                    </div>
                    <div class="playlistButton">
                        <label for="barber"><input type="radio" v-model="selectedPlaylist" id="barber" value="barber">Barber Beats</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
 .controlContainer {
     height: 50px;
     display: flex;
 }

 #radioIFrame {
     width: 100%;
     height: 100%;
 }

 .iFrameContainer {
    flex-grow: 1 !important;
    flex: 1 !important;
    display: flex;
 }

 #radioContainer {
     height: 100%;
     display: flex;
     flex-direction: column;
     overflow: visible;
 }

 .playlistMenuContainer {
     position: relative;
     bottom: 0;
 }

 .playlistMenuPopup {
     position: absolute;
     display: flex;
     flex-direction: column;
     height: 160px;
     width: 200px;
     top: -160px;
     box-shadow: 0 0 5px;
     left: -200px;
     background-color: white;
     padding: 12px;
 }

 .flex-button {
     flex: 1;
 }

 .playlistButton {
     margin-bottom: 4px;
 }

 .playlistButton input {
     margin-right: 4px;
 }
</style>

<script>
    module.exports = {
        props:{
            app:true
        },
        name: 'PlaylistPlayer',
        data: function() {
            return {
                playerExpanded: false,
                playerIsPlaying: true,
                videoTitle: '',
                playlistMenu: false,
                selectedPlaylist: 'default'
            }
        },
        watch: {
            selectedPlaylist: function (val) {
                if ( window.ytRadio && window.ytRadio.getVideoData ) {
                    window.ytRadio.cuePlaylist();

                    var self = this
                    setTimeout( function() { 
                        //todo clean up options
                        switch(val) {
                            case "mallsoft":
                            window.ytRadio.loadPlaylist({listType:'playlist', list:'PLEe9fYs-_7nl_5CvSyoFpaDji7S0Ao1AJ', index: [Math.floor(Math.random() * 32)]})
                            break;
                            case "futureFunk":
                            window.ytRadio.loadPlaylist({listType:'playlist', list:'PLEe9fYs-_7nmeE0xzgb9FV187sYr8-SKo', index: [Math.floor(Math.random() * 32)]})
                            break;
                            case "barber":
                            window.ytRadio.loadPlaylist({listType:'playlist', list:'PLEe9fYs-_7nlK81rI1hWHm3tQf3hiGyRM', index: [Math.floor(Math.random() * 16)]})
                            break;
                            case "synthwave":
                            window.ytRadio.loadPlaylist({listType:'playlist', list:'PLEe9fYs-_7nmjrvZ1gQYzBa9MB_B5TMMq', index: [Math.floor(Math.random() * 24)]})
                            break;
                            default:
                            window.ytRadio.loadPlaylist({listType:'playlist', list:'PLEe9fYs-_7nkA5xLFnrUEUbkCU_41Qkod', index: [Math.floor(Math.random() * 49)]})
                        }
                        window.ytRadio.setShuffle(true); 
                        window.ytRadio.setLoop(true);
                        self.playerIsPlaying = true;
                        self.playlistMenu = false;
                    }, 500);
                
                }
            }
        },
        methods: {
            toggleExpandedPlayer: function() {
                this.playerExpanded = !this.playerExpanded;
            },
            playNext: function() {
                if (!window.ytRadio || !window.ytRadio.nextVideo) {
                return
                }

                window.ytRadio.nextVideo();
            },
            playPrevious: function() {
                if (!window.ytRadio || !window.ytRadio.previousVideo) {
                return
                }

                window.ytRadio.previousVideo();
            },
            togglePlay: function() {
                if (!window.ytRadio || !window.ytRadio.pauseVideo) {
                return
                }

                if (this.playerIsPlaying) {
                window.ytRadio.pauseVideo();
                this.playerIsPlaying = false;
                } else {
                window.ytRadio.playVideo();
                this.playerIsPlaying = true;
                }
            },
            togglePlaylistMenu: function() {
                this.playlistMenu = !this.playlistMenu
            }
            },
            computed: {
            isPlayerExpanded: function() {
                return this.playerExpanded;
            },
            isPlayerPlaying: function() {
                return (!window.ytRadio ? false : window.ytRadio.getPlayerState() === 1) || this.playerIsPlaying
            }
        },
        ready: function () {
            var numPl = Math.floor((Math.random() * 12) + 1);
            var ytRadio = new YT.Player("radioIFrame", {
                height: '200',
                width: '350',
                playerVars: {
                    listType:'playlist',
                    list:'PLEe9fYs-_7nkA5xLFnrUEUbkCU_41Qkod',
                    index: numPl,
                    autoplay: 1,
                    loop: 1,
                    enablejsapi: 1,
                    start: 0,
                    playsinline: 1,
                    disablekb: 1,
                    modestbranding: 1,
                },
                events: {
                    'onReady': function (event) {
                        event.target.setVolume(50);
                        setTimeout(function() {
                            event.target.setShuffle({'shufflePlaylist' : true});
                        }, 1000);
                    }
                }
            });

            window.ytRadio = ytRadio;

            var self = this;

            setInterval( function() {
                // Check if player is initialized and the video is loaded
                if ( window.ytRadio && window.ytRadio.getVideoData ) {
                    // States: 1: playing, 2: paused, 5: stopped
                    if ( [ 1, 2, 5 ].indexOf( window.ytRadio.getPlayerState() ) >= 0 ) {
                        // Set the innerText of div with id="title" to player title
                        self.videoTitle = window.ytRadio.getVideoData().title;
                    }
                }
            }, 100 );
        }
    }
</script>