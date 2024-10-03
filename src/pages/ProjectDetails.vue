<script>
    import { store } from '../store/store.js';
    import axios from 'axios';

    export default {
        name: 'ProjectDetails',
        data(){
            return {
                project:{},
                projectType: {},
                projectTechnologies: [],
                isLoading: true
            }
        },
        methods: {
            getApi(slug){
                axios.get(store.apiUrl + 'project/' + slug)
                    .then(res => {
                        this.isLoading = false;
                        if(res.data.success){
                            this.project = res.data.project;
                            this.projectType = res.data.project.type;
                            this.projectTechnologies = res.data.project.technologies;
                            console.log(this.project);
                        }
                        else {
                            this.$router.push({name: '404'});
                        }
                    })
            }
        },
        computed: {
            imageUrl() {
                const baseApi = 'http://localhost:8000';
                return this.project.img_path !== '/img/placeholder.jpg' ? `${baseApi}/storage/${this.project.img_path}` : `${baseApi}/img/placeholder.jpg`;
            },
        },
        mounted(){
            const slug = this.$route.params.slug;
            this.getApi(slug);                      
        }
    }
</script>

<template>
    <div v-if="isLoading" class="loader"></div>
    <div v-else class="project">
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
            <img :src="imageUrl" :alt="project.img_original_name">
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

            img {
                max-width: 100%;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
        }
    }

    .loader {
        width: 40px;
        aspect-ratio: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &:before,
        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            margin: -8px 0 0 -8px;
            width: 16px;
            aspect-ratio: 1;
            background: var(--secondary);
            animation:
                l1-1 2s  infinite,
                l1-2 .5s infinite;
        }

        &:after {
            background:var(--accent);
            animation-delay: -1s,0s;
        }

        @keyframes l1-1 {
            0%   {top:0   ;left:0}
            25%  {top:100%;left:0}
            50%  {top:100%;left:100%}
            75%  {top:0   ;left:100%}
            100% {top:0   ;left:0}
        }

        @keyframes l1-2 {
            80%,100% {transform: rotate(0.5turn)}
        }

    }


</style>

