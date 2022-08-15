<style lang="less" rel="stylesheet/less">
    @import "../main";
    @keyframes flicker {
        0% {
            opacity: 0.27861;
        }
        5% {
            opacity: 0.34769;
        }
        10% {
            opacity: 0.23604;
        }
        15% {
            opacity: 0.90626;
        }
        20% {
            opacity: 0.18128;
        }
        25% {
            opacity: 0.83891;
        }
        30% {
            opacity: 0.65583;
        }
        35% {
            opacity: 0.67807;
        }
        40% {
            opacity: 0.26559;
        }
        45% {
            opacity: 0.84693;
        }
        50% {
            opacity: 0.96019;
        }
        55% {
            opacity: 0.08594;
        }
        60% {
            opacity: 0.20313;
        }
        65% {
            opacity: 0.71988;
        }
        70% {
            opacity: 0.53455;
        }
        75% {
            opacity: 0.37288;
        }
        80% {
            opacity: 0.71428;
        }
        85% {
            opacity: 0.70419;
        }
        90% {
            opacity: 0.7003;
        }
        95% {
            opacity: 0.36108;
        }
        100% {
            opacity: 0.24387;
        }
        }
        @keyframes textShadow {
        0% {
            text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.1), -0.4389924193300864px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        5% {
            text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.1), -2.7928974010788217px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        10% {
            text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.1), -0.02956275843481219px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        15% {
            text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.1), -0.40218538552878136px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        20% {
            text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.1), -3.4794037899852017px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        25% {
            text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.1), -1.6125630401149584px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        30% {
            text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.1), -0.7015590085143956px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        35% {
            text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.1), -3.896914047650351px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        40% {
            text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.1), -3.870905614848819px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        45% {
            text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.1), -2.231056963361899px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        50% {
            text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.1), -0.08084290417898504px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        55% {
            text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.1), -2.3758461067427543px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        60% {
            text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.1), -2.202193051050636px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        65% {
            text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.1), -2.8638780614874975px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        70% {
            text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.1), -0.48874025155497314px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        75% {
            text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.1), -1.8948491305757957px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        80% {
            text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.1), -0.0833037308038857px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        85% {
            text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.1), -0.09769827255241735px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        90% {
            text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.1), -3.443339761481782px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        95% {
            text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.1), -2.1841838852799786px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        100% {
            text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.1), -2.6208764473832513px 0 1px rgba(255,0,80,0.1), 0 0 3px;
        }
        }
        .crt::after {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(18, 16, 16, 0.06);
        opacity: 0;
        z-index: 2;
        pointer-events: none;
        //animation: flicker 0.15s infinite;
        }
        .crt::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(rgba(18, 16, 16, 0.15) 90%, rgba(0, 0, 0, 0.35) 90%), linear-gradient(90deg, rgba(255, 0, 0, 0.36), rgba(0, 255, 0, 0.32), rgba(0, 0, 255, 0.36));
        z-index: 1000;
        opacity: 0.2;
        background-size: 100% 3px, 4px 100%;
        pointer-events: none;
        }
        .crt {
        animation: textShadow 1.6s infinite;
        }
        * {
            letter-spacing: 2px;
        }
</style>
<template>
    <div class="root crt">

        <wallpaper class="scope"></wallpaper>
        <files class="scope" :files.sync="files"></files>
        <selection class="scope"></selection>
        <application class="scope" :apps.sync="apps"></application>
        <taskbar class="scope" :apps.sync="apps"></taskbar>
        <mousemenu class="scope"></mousemenu>
        <links class="scope"></links>
     
    </div>
</template>

<script>
    var appController = require('service/app-controller');

    require('service/keyboard').init();
    require('service/global-var');
    module.exports = {
        el:function () {
            return "body";
        },
        data:function () {
            return {
                apps:appController.apps,
                files:appController.files
            }
        },
        replace: false,
        components:{
            wallpaper:require('views/wallpaper.vue'),
            files:require('views/file.vue'),
            selection:require('views/selection.vue'),
            application:require('views/application.vue'),
            taskbar:require('views/taskbar.vue'),
            mousemenu:require('views/mouse-menu.vue'),
            links:require('../components/general/links.vue'),
            counter:require('../components/general/counter.vue')
        },
        ready:function () {
            var vm = this;
        }
    };
</script>