<script>
    import { store } from '../store/store.js';
    import axios from 'axios';

    export default {
        name: 'ProjectsPerTechnology',
        data(){
            return {
                technology: {},
                projects: []
            }
        },
        methods: {
            getApi(slug){
                axios.get(store.apiUrl + 'projects-per-technology/' + slug)
                    .then(res => {                       
                        this.technology = res.data.technology;
                        this.projects = res.data.technology.projects;
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
    <h1> {{ this.technology.name }} </h1>
    <ul>
        <li v-for="project in this.projects" :key="project.id">
            {{ project.title }}
        </li>
    </ul>

</template>

<style scoped lang="scss">

</style>