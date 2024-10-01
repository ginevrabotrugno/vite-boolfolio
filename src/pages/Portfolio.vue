<script>
    import { store } from '../store/store.js';
    import axios from 'axios';

    export default {
        name: 'portfolio',
        data(){
            return {
                projects: [],
                links: [],
                isLoading: true
            }
        },
        methods:{
            getApi(){
                axios.get(store.apiUrl + 'projects')
                    .then(result =>{
                        this.projects = result.data.projects.data;
                        this.links = result.data.projects.links;
                        console.log(this.links);
                        this.isLoading = false;
                    })
                    .catch(error => {
                        console.log(error.message);
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
        <div v-if="isLoading" class="loader"></div>
        <ul v-else>
            <li v-for="project in this.projects" :key="project.id">
                {{ project.title }}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">

    .cards-container {
        padding: 20px;
        margin: 25px 0;
        border-radius: 20px;
        border: 1px solid var(--primary);
        background-color: var(--background);
        position: relative;
        min-height: 200px;

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

    }


</style>

