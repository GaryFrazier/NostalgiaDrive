<style lang="less" rel="stylesheet/less">
    .wallpaper-section{
        height:100%;
        width: 100%;
        margin-left: 50%;
        transform: translateX(-50%);
        pointer-events: none;
    }

</style>
<template>
    <div class="wallpaper-section" :style="backgroundStyles(getImgUrl)">
        <img
                class="wallpaper-section wallpaperImg"
                @click="emit('click:wallpaper',$event);"
                @drop="drop($event);"
                @dragover="dragover($event)"
                @mousedown="mousedown($event)"
                @mouseup="emit('mouseup:wallpaper',$event);"
        />
       
        
      
    </div>
</template>

<script>
    var storage = require('service/storage');

    module.exports = {
        data: function () {
            return {
                wallpaper: storage.get('wallpaper') || "solid.jpg",
            }
        },
        methods: {
            emit:function (name,e) {
                if(e.button==0){
                    $event.emit(name,{x:e.clientX,y:e.clientY});
                }
            },
            drop:function (e) {
                $event.emit('drop:wallpaper',{x:e.clientX,y:e.clientY});
                e.preventDefault();
            },
            dragover:function (e) {
                e.preventDefault();
            },
            mousedown:function (e) {
                if(e.button==2){
                    $event.emit('contextmenu:wallpaper',{x:e.clientX,y:e.clientY})
                }else if(e.button==0){
                    $event.emit('mousedown:wallpaper',{x:e.clientX,y:e.clientY})
                }
            },
            backgroundStyles(getImgUrl) {
                if (getImgUrl.indexOf('r-') !== -1) {
                    return {
                        'background-image': `url(${getImgUrl})`,
                        'background-repeat': 'repeat',
                    }
                }
                
                return {
                    'background-image': `url(${getImgUrl})`,
                    'background-size': 'cover',
                }
            },
            rotateWallpaperFunc: function() {
                var self = this
                
                if (self.rotateWallpaper) {
                    var current = self.animatedWallpapers.find(x => x.value === self.wallpaper)
                    if (!current) {
                        storage.set('wallpaper', self.animatedWallpapers[0].value)
                    } else {
                        var i = self.animatedWallpapers.indexOf(current) + 1
                        if (i < self.animatedWallpapers.length) {
                            storage.set('wallpaper', self.animatedWallpapers[i].value)
                        } else {
                            storage.set('wallpaper', self.animatedWallpapers[0].value)
                        }
                    }
                }
            }
        },
        computed: {
            getImgUrl() {
                if (this.wallpaper.indexOf('.gif') !== -1) {
                    return this.wallpaper
                }
                
                var images = require.context('../images/wallpaper/', false, /\.(png|jpg|ico)$/)
                return images('./' + this.wallpaper)
            },
            getGifId() {
                const regex = /media\/(.*)\/giphy/gm
                return regex.exec(this.getImgUrl)[1];
            }
        },
        components: {},
        ready: function () {
            $(window).on('contextmenu',function (e) {
                e.preventDefault();
            })

            var self = this
            setInterval(function() {
                self.wallpaper = storage.get('wallpaper') || "solid.jpg";
            }, 1000)
            setInterval(function() {
                self.rotateWallpaperFunc()
            }, 60000)
        }
    }
</script>