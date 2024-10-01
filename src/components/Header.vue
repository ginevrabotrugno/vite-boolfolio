<script>
    import Navbar from './partials/Navbar.vue';
    export default {
        name: 'Header',
        components:{
            Navbar
        }
    }
</script>

<template>
    <header>
        <div class="container">
            <div id="logo">
                BOOLFOLIO
            </div>
            <Navbar></Navbar>
        </div>
    </header>
</template>

<style scoped lang="scss">
    header {
        width: 100%;
        height: 60px;
        background-color: var(--neutral);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 900;
        box-shadow: 0 -2px 5px var(--primary);

        #logo {
            font-size: 20px;
            font-weight: 900;
        }

        .container {
            width: 95%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>

