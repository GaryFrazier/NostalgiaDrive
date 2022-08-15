<template>
    <div id="donateContainer">
        <h3>Like the site? Consider helping with server costs!</h3>
        <br/>
        <a href="https://www.paypal.me/freewillfirebox" target="_blank" rel="noopener noreferrer">Donate</a><br/>
        <br />
        <h3>Spread the word!</h3><br/>
        <div style="display:flex">
            <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.thevirtualplaza.com&layout=button_count&size=large&width=88&height=28&appId" width="150" height="50" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
    </div>
</template>

<style>
    #donateContainer {
        width: 100%;
        height: 100%;
        padding: 12px;
        overflow-y: scroll;
    }
</style>

<script>
    module.exports = {
        props:{
            app:true
        },
        components: {

        },
        name: 'DonateApp',
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