<script>
    import { store } from '../store/store.js';
    import axios from 'axios';

    export default {
        name: 'ProjectDetails',
        data(){
            return {
                project:{},
                projectType: {},
                projectTechnologies: []
            }
        },
        methods: {
            getApi(slug){
                axios.get(store.apiUrl + 'project/' + slug)
                    .then(res => {
                        if(res.data.success){
                            this.project = res.data.project;
                            this.projectType = res.data.project.type;
                            this.projectTechnologies = res.data.project.technologies;
                            // console.log(this.projectTechnologies);
                        }
                        else {
                            this.$router.push({name: '404'});
                        }
                    })
            }
        },
        computed: {
            imageUrl() {
                return this.project.img_path ? `http://localhost:8000/storage/${this.project.img_path}` : 'http://localhost:8000/img/placeholder.jpg';
            },
            imageAlt() {
                return this.project.img_original_name ? this.project.img_original_name : 'no image';
            }
        },
        mounted(){
            const slug = this.$route.params.slug;
            this.getApi(slug);                      
        }
    }
</script>

<template>
    <div class="project">
        <div class="info">
            <h1> {{ project.title }} </h1>
            <h4> {{ project.start_date }} </h4>
            <div v-if="projectType" class="type">
                {{  this.projectType.name  }}
            </div>
            <ul v-if="this.projectTechnologies.length">
                <h4>Tecnologie</h4>
                <li v-for="(technology, i) in this.projectTechnologies" :key="i">
                    {{ technology.name }}
                </li>
            </ul>
            <ul>
                <li><strong>Data di Inizio: </strong> {{ project.start_date }} </li>
                <li><strong>Stato: </strong> {{ project.status }}</li>
                <li v-if="this.project.project_url"><strong>Link: </strong> <a href="#"> {{ project.project_url }} </a></li>
            </ul>
            <div class="description" v-if="this.project.description">
                <h4>Descrizione</h4>
                <p> {{ project.description }} </p>
            </div>
        </div>
        <div class="img">
            <img :src="imageUrl" :alt="imageAlt">
        </div>
    </div>
</template>

<style scoped lang="scss">

    .project {
        width: 80%;
        margin: 100px auto;
        display: flex;
        align-items: center;
        gap: 30px;

        .info {
            width: calc((100% / 2) - 30px);
            padding: 20px;
            text-align: left;

            h1 {
                margin-bottom: 15px;
            }

            .type {
                display: inline-block;
                padding: 8px 12px;
                background-color: var(--secondary);
                font-weight: 600;
                border-radius: 10px;
                margin-top: 15px;
            }

            ul {
                margin-top: 15px;
                line-height: 1.5;
            }

            .description {
                margin-top: 15px;
            }
        }

        .img {
            width: calc((100% / 2) - 30px);
        }
    }

</style>

