<script>
    import { store } from '../store/store.js';
    import axios from 'axios';

    export default {
        name: 'ProjectDetails',
        data(){
            return {
                project:{}
            }
        },
        methods: {
            getApi(slug){
                axios.get(store.apiUrl + 'project/' + slug)
                    .then(res => {
                        if(res.data.success){
                            this.project = res.data.project;
                            console.log(this.project);
                            
                        }
                        else {
                            this.$router.push({name: '404'});
                        }
                    })
            }
        },
        mounted(){
            const slug = this.$route.params.slug;
            this.getApi(slug);
        }
    }
</script>

<template>
    <h1> {{ project.title }} </h1>
    <p> {{ project.description }} </p>
</template>

<style scoped lang="scss">

</style>

