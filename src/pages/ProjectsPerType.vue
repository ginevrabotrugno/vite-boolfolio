<script>
    import { store } from '../store/store.js';
    import axios from 'axios';

    export default {
        name: 'ProjectsPerType',
        data(){
            return {
                type: {},
                projects: []
            }
        },
        methods: {
            getApi(slug){
                axios.get(store.apiUrl + 'projects-per-type/' + slug)
                    .then(res => {
                        this.type = res.data.type;
                        this.projects = res.data.type.projects;
                        console.log(this.projects);
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
    <h1> {{ this.type.name }} </h1>
    <ul>
        <li v-for="project in this.projects" :key="project.id">
            {{ project.title }}
        </li>
    </ul>

</template>

<style scoped lang="scss">

</style>