<template>
    <div id="playerContainer">
        <div class="iFrameContainer">
            <div id="playlistIFrame"></div>
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
            <!--<button class="flex-button" @click="togglePlaylistMenu"> 
                <i class="material-icons">playlist_play</i>
            </button>-->
            
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
                        <label for="vaporTrap"><input type="radio" v-model="selectedPlaylist" id="vaporTrap" value="vaporTrap">Vapor Trap</label>
                    </div>
                    <div class="playlistButton">
                        <label for="albums"><input type="radio" v-model="selectedPlaylist" id="albums" value="albums">Albums / Mixes</label>
                    </div>
                    <div class="playlistButton">
                        <label for="3DRenders"><input type="radio" v-model="selectedPlaylist" id="3DRenders" value="3DRenders">3D Renders</label>
                    </div>
                    <div class="playlistButton">
                        <label for="void"><input type="radio" v-model="selectedPlaylist" id="void" value="void">T H E ~ V O I D</label>
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

 #playlistIFrame {
     width: 100%;
     height: 100%;
 }

 .iFrameContainer {
    flex-grow: 1 !important;
    flex: 1 !important;
    display: flex;
 }

 #playerContainer {
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
     height: 200px;
     width: 200px;
     top: -200px;
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
                if ( window.ytPlayer && window.ytPlayer.getVideoData ) {

                    //todo clean up options
                    switch(val) {
                        case "mallsoft":
                        window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nl_5CvSyoFpaDji7S0Ao1AJ', index: [Math.floor(Math.random() * 30)]})
                        break;
                        case "futureFunk":
                        window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nmeE0xzgb9FV187sYr8-SKo', index: [Math.floor(Math.random() * 29)]})
                        break;
                        case "void":
                        window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nmh2_sqnojj7osnkfszZCBb', index: [Math.floor(Math.random() * 12)]})
                        break;
                        case "synthwave":
                        window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nmjrvZ1gQYzBa9MB_B5TMMq', index: [Math.floor(Math.random() * 18)]})
                        break;
                        case "vaporTrap":
                        window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nlUG5gOvlKe62yh2fWLgZkW', index: [Math.floor(Math.random() * 20)]})
                        break;
                        case "albums":
                        window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nk7G5RlBJa3a-lONaFwH8-Y', index: [Math.floor(Math.random() * 11)]})
                        break;
                        case "3DRenders":
                        window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nkASBhqRbR5CH4x-kzGyTso', index: [Math.floor(Math.random() * 4)]})
                        break;
                        default:
                        window.ytPlayer.cuePlaylist({listType:'playlist', list:'PLEe9fYs-_7nmGtegPooDvlHVa4UMZBDxd', index: [Math.floor(Math.random() * 42)]})
                    }

                    var self = this
                    setTimeout( function() { 
                        window.ytPlayer.setShuffle(true); 
                        window.ytPlayer.playVideo();
                        window.ytPlayer.seekTo(0);
                        window.ytPlayer.setLoop(true);
                        self.playerIsPlaying = true;
                        self.playlistMenu = false;
                    }, 1000);
                }
            }
        },
        methods: {
            toggleExpandedPlayer: function() {
                this.playerExpanded = !this.playerExpanded;
            },
            playNext: function() {
                if (!window.ytPlayer || !window.ytPlayer.nextVideo) {
                return
                }

                window.ytPlayer.nextVideo();
            },
            playPrevious: function() {
                if (!window.ytPlayer || !window.ytPlayer.previousVideo) {
                return
                }

                window.ytPlayer.previousVideo();
            },
            togglePlay: function() {
                if (!window.ytPlayer || !window.ytPlayer.pauseVideo) {
                return
                }

                if (this.playerIsPlaying) {
                window.ytPlayer.pauseVideo();
                this.playerIsPlaying = false;
                } else {
                window.ytPlayer.playVideo();
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
                return (!window.ytPlayer ? false : window.ytPlayer.getPlayerState() === 1) || this.playerIsPlaying
            }
        },
        ready: function () {
            var numPl = Math.floor((Math.random() * 12) + 1);
            var ytPlayer = new YT.Player("playlistIFrame", {
                height: '200',
                width: '350',
                playerVars: {
                    listType:'playlist',
                    list:'PLEe9fYs-_7nmGtegPooDvlHVa4UMZBDxd',
                    index: numPl,
                    autoplay: 1,
                    loop: 1,
                    enablejsapi: 1,
                    start: 0,
                    playsinline: 1,
                    disablekb: 1,
                    modestbranding: 1
                },
                events: {
                    'onReady': function (event) {
                        event.target.mute();
                        setTimeout(function() {
                            event.target.setShuffle({'shufflePlaylist' : true});
                        }, 1000);
                    }
                }
            });

            window.ytPlayer = ytPlayer;

            var self = this;

            setInterval( function() {
                // Check if player is initialized and the video is loaded
                if ( window.ytPlayer && window.ytPlayer.getVideoData ) {
                    // States: 1: playing, 2: paused, 5: stopped
                    if ( [ 1, 2, 5 ].indexOf( window.ytPlayer.getPlayerState() ) >= 0 ) {
                        // Set the innerText of div with id="title" to player title
                        self.videoTitle = window.ytPlayer.getVideoData().title;
                    }
                }
            }, 100 );
        }
    }
</script>