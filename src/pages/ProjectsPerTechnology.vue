<script>
import CardSmall from '../components/CardSmall.vue';
import { store } from '../store/store.js';
import axios from 'axios';

export default {
    name: 'ProjectsPerTechnology',
    components: {
        CardSmall
    },
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
            <CardSmall v-for="project in this.projects" :key="project.id" :project="project"></CardSmall>
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