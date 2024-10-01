<script>
    import { store } from '../store/store.js';
    import axios from 'axios';

    export default {
        name: 'portfolio',
        data(){
            return {
                projects: [],
                links: [],
                isLoading: true,
                paginatorData: {
                    current_page: 1,
                    links: [],
                }
            }
        },
        methods:{
            getApi(apiUrl){
                this.isLoading = true;

                axios.get(apiUrl)
                    .then(result =>{
                        this.projects = result.data.projects.data;
                        this.paginatorData.current_page = result.data.projects.current_page;
                        this.paginatorData.links = result.data.projects.links;
                        this.links = result.data.projects.links;
                        this.isLoading = false;
                        console.log(this.paginatorData);
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            }
        },
        mounted(){
            this.getApi(store.apiUrl + 'projects');
        }
    }
</script>

<template>
    <h1>Portfolio</h1>

    <div class="cards-container">
        <div v-if="isLoading" class="loader"></div>
        <div v-else>
            <ul>
                <li v-for="project in this.projects" :key="project.id">
                    {{ project.title }}
                </li>
            </ul>
        </div>
    </div>
    <div v-if="!isLoading" class="paginator">
        <button
            v-for="(link, i) in paginatorData.links"
            :key="i"
            v-html="link.label"
            :disabled="link.active || !link.url"
            @click="getApi(link.url)">            
        </button>
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

    .paginator {
            display: flex;
            justify-content: center;
            margin-top: 25px;

            button {
                font-family: inherit;
                padding: 4px 10px;
                cursor: pointer;
                background-color: var(--background);
                color: var(--primary);
                border: 0.5px solid var(--primary);
                border-radius: 3px;
                margin: 0 2px;

                &:hover,
                &:disabled {
                    background-color: var(--primary);
                    color: var(--neutral);
                }

                &:disabled {
                    opacity: 0.5;
                }
            }
        }



</style>

