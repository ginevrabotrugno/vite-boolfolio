<script>
    import { store } from '../store/store.js';
    import axios from 'axios';

    export default {
        name: 'portfolio',
        data(){
            return {
                projects: []
            }
        },
        methods:{
            getApi(){
                axios.get(store.apiUrl + 'projects')
                    .then(result =>{
                        this.projects = result.data.projects;
                        console.log(this.projects);
                    })
            }
        },
        mounted(){
            this.getApi();
        }
    }
</script>

<template>
    <h1>Portfolio</h1>
</template>

<style scoped lang="scss">

</style>

