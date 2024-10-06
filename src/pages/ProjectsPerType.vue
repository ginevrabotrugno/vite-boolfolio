<script>
import Loader from '../components/partials/Loader.vue';
import CardSmall from '../components/CardSmall.vue';
import { store } from '../store/store.js';
import axios from 'axios';

export default {
    name: 'ProjectsPerType',
    components: {
        Loader,
        CardSmall
    },
    data(){
        return {
            type: {},
            projects: [],
            isLoading: true
        }
    },
    methods: {
        getApi(slug){
            this.isLoading = true;
            axios.get(store.apiUrl + 'projects-per-type/' + slug)
                .then(res => {
                    this.type = res.data.type;
                    this.projects = res.data.type.projects;
                    this.isLoading = false;
                })
                .catch(error => {
                    console.log(error.message);
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
    <Loader v-if="isLoading"></Loader>
    <div v-else>
        <h1> {{ this.type.name }} </h1>
        <div class="card-container">
            <div class="row">
                <CardSmall v-for="project in projects" :key="project.id" :project="project"></CardSmall>
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

        }

    }
</style>