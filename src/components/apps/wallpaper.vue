<template>
    <div id="wallpaperContainer">
        <h2>Choose a wallpaper!</h2>
        <div class="indented">
            <div class="wallpaperButton">
                <div><label for="solid"><input type="radio" v-model="selectedWallpaper" id="solid" value="solid.jpg">Solid</label></div>
                <div><label for="marble"><input type="radio" v-model="selectedWallpaper" id="marble" value="r-marble.jpg">Marble</label></div>
                <div><label for="spiral"><input type="radio" v-model="selectedWallpaper" id="spiral" value="r-spiral.jpg">Spiral</label></div>
                <div><label for="bubbles"><input type="radio" v-model="selectedWallpaper" id="bubbles" value="r-bubbles.jpg">Bubbles</label></div>
                <div><label for="95"><input type="radio" v-model="selectedWallpaper" id="95" value="95.jpg">95</label></div>
                <div><label for="xperience"><input type="radio" v-model="selectedWallpaper" id="xperience" value="xperience.jpg">XPerience</label></div>
                <div><label for="default"><input type="radio" v-model="selectedWallpaper" id="default" value="default.jpg">The Virtual Plaza</label></div>
                <div><label for="islander"><input type="radio" v-model="selectedWallpaper" id="islander" value="islander.png">Islander</label></div>
            </div>
        </div>
    </div>
</template>

<style>
    #wallpaperContainer {
        width: 100%;
        height: 100%;
        padding: 12px;
        overflow-y: scroll;
    }
    
    .indented {
        margin-left: 20px;
    }

    .indented input {
        margin-right: 12px;
    }

    .wallpaperButton {
        margin: 10px 0;
    }

    .listSelectorContainer {
        display: flex;
        align-items: center;
    }

    .listSelectorContainer label {
        width: 150px;
        text-align: center;
    }

    .listSelectorContainer button {
        flex: 0;
    }
    
</style>

<script>
    var storage = require('service/storage');

    module.exports = {
        props:{
            app: true
        },
        components: {

        },
         watch: {
            selectedWallpaper: function (val) {
                storage.set('wallpaper', val);
            },
        },
        name: 'WallpaperApp',
        data: function() {
            return {
                selectedWallpaper: "solid.jpg",
            }
        },

        methods: {
            refreshWallpaper: function() {
                var self = this
                var wallpaper = storage.get('wallpaper');

                if (wallpaper) {
                    self.selectedWallpaper = wallpaper;
                } else {
                    self.selectedWallpaper = "solid.jpg";
                }
            }
        },
        ready: function () {
            var self = this

            this.refreshWallpaper()
            setInterval(function() {

                self.refreshWallpaper()
            }, 1000)            
        }
    }
</script>