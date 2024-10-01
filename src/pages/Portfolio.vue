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

    <div class="cards-container">
        <ul>
            <li v-for="project in this.projects" :key="project.id">
                {{ project.title }}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">

    .cards-container {
        padding: 20px;
        margin-top: 25px;
        border-radius: 20px;
        border: 1px solid var(--primary);
        background-color: var(--background);
    }

</style>

