<script>
import Loader from '../components/partials/Loader.vue';
import Card from '../components/Card.vue';
import { store } from '../store/store.js';
import axios from 'axios';

export default {
    name: 'portfolio',
    components: {
        Loader,
        Card
    },
    data(){
        return {
            projects: [],
            links: [],
            isLoading: true,
            paginatorData: {
                current_page: 1,
                links: [],
            },
            types: [],
            technologies: []
        }
    },
    methods:{
        getApi(apiUrl, type = 'projects'){
            this.isLoading = true;

            axios.get(apiUrl)
                .then(result =>{

                    if(type === 'projects'){
                        this.projects = result.data.data.data;
                        this.paginatorData.current_page = result.data.data.current_page;
                        this.paginatorData.links = result.data.data.links;
                        this.links = result.data.data.links;
                        this.isLoading = false;
                    } else {
                        this[type] = result.data.data;
                        console.log(this[type]);
                    }
                })
                .catch(error => {
                    console.log(error.message);
                })
            
        }
    },
    mounted(){
        this.getApi(store.apiUrl + 'types', 'types');
        this.getApi(store.apiUrl + 'technologies', 'technologies');            
        this.getApi(store.apiUrl + 'projects', 'projects');
    }
}
</script>

<template>
    <h1>Portfolio</h1>

    <Loader v-if="isLoading"></Loader>

    <div v-else>
        <div class="types">
            <div class="type" v-for="type in this.types" :key="type.id"> 
                <RouterLink :to="{name: 'ProjectsPerType', params: {slug: type.slug}}"> {{ type.name }} </RouterLink>    
            </div>
        </div>
        
        <div class="technologies">
            <div class="technology" v-for="technology in this.technologies" :key="technology.id">
                <RouterLink :to="{name: 'ProjectsPerTechnology', params: {slug: technology.slug}}"> {{ technology.name }} </RouterLink>    
            </div>
        </div>
    
        <div class="searchbar">
            <form action="#">
                <input type="text" placeholder="Search ...">
                <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
        
        <div class="cards-container">
            <div class="row">
                <Card v-for="project in projects" :key="project.id" :project="project"></Card>
            </div>
        </div>
        <div class="paginator">
            <button
                v-for="(link, i) in paginatorData.links"
                :key="i"
                v-html="link.label"
                :disabled="link.active || !link.url"
                @click="getApi(link.url)">            
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .types {
        width: 80%;
        margin: 25px auto 15px;
        display: flex;
        justify-content: space-evenly;
        border-top: 2px dashed var(--accent);
        border-bottom: 2px dashed var(--accent);
        line-height: 50px;
        
        .type {
            cursor: pointer;
            padding: 0 15px;
            margin: 5px 0;
            font-weight: 600;
            
            &:hover {
                background-color: var(--secondary);
                color: var(--primary);
                text-decoration: underline;
            }
            
        }
    }
    
    .technologies {
        width: 80%;
        margin: 0 auto 40px;
        display: flex;
        justify-content: space-between;

        .technology {
            padding: 5px 10px;
            font-size: 13px;
            background-color: var(--accent);
            border-radius: 20px;
            border: 1px solid var(--accent);
            cursor: pointer;

            &:hover {
                background-color: var(--neutral);
                border: 1px solid var(--primary);
            }
        }
    }

    .searchbar {
        width: 100%;
        margin: 25px auto;
        position: relative;
        input {
            width: 100%;
            padding: 10px 20px;
            border-radius: 20px;
            border: none;
            background-color: var(--background);
            outline: none;
            box-shadow: 0 0 10px #ccc;
            font-family: inherit;
            color: var(--primary);

            &:focus {
                border: 2px solid var(--secondary);
            }
        }
        
        button {
            height: 100%;
            padding: 10px 20px;
            margin-left: 5px;
            border-radius: 20px;
            border: none;
            position: absolute;
            top: 0;
            right: 0;
            background-color: var(--secondary);

            &:hover {
                background-color: var(--accent);
            }
        }
    }

    .cards-container {

        .row {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            flex-wrap: wrap;
        }
        
    }

    .paginator {
            display: flex;
            justify-content: center;
            margin: 25px 0;

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
                    background-color: var(--secondary);
                    color: var(--primary);
                }

                &:disabled {
                    opacity: 0.5;
                }
            }
    }



</style>

