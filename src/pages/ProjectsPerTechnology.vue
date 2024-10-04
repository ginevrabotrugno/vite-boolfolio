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
    <div class="card-container">
        <div class="row">
            <div class="card" v-for="project in this.projects" :key="project.id">
                <h3>
                    {{ project.title }}
                </h3>
                <RouterLink :to="{name: 'ProjectDetails', params: {slug: project.slug}}">
                    <i class="fa-solid fa-eye"></i>
                </RouterLink>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
    .card-container {
        width: 80%;
        margin: 25px auto;

        .row {
            display: flex;
            justify-content: center;
            align-items: stretch;
            flex-wrap: wrap;
            gap: 30px;

            .card {
                width: calc((100% / 4) - 30px);
                padding: 20px;
                text-align: left;
                border-radius: 20px;
                border: solid 1px var(--secondary);
                background-color: var(--background);
                position: relative;
                line-height: 1.5;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

                h3 {
                    display: inline-block;
                    max-width: 60%;
                }

                a {
                    padding: 6px 10px;
                    border-radius: 50%;
                    background-color: var(--accent);
                    position: absolute;
                    bottom: 20px;
                    right: 25px;
                }

            }
        }

    }

</style>