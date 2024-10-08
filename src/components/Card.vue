<script>

export default {
    name: 'Card',
    props: {
        project: Object
    }
}

</script>

<template>

<div class="card">
    <h3> {{ project.title }} </h3>
    <h6> {{ project.start_date }} </h6>
    <div class="type-label">
        {{ project.type.name }}
    </div>
    <div v-if="project.technologies.length" class="technologies">
        <h5>Tecnologie: </h5>
        <ul>
            <li v-for="(technology, i) in project.technologies" :key="i">
                {{ technology.name }}
            </li>
        </ul>
    </div>
    <RouterLink :to="{name: 'ProjectDetails', params: {slug: project.slug}}">
        <i class="fa-solid fa-eye"></i>
    </RouterLink>
</div>


</template>

<style scoped lang="scss">

    .card {
        width: calc((100% / 4) - 30px);
        padding: 15px;
        text-align: left;
        margin: 25px 0;
        border-radius: 20px;
        border: solid 1px var(--secondary);
        background-color: var(--background);
        position: relative;
        line-height: 1.5;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        h3 {
            max-width: 60%;
            padding-right: 15px;
        }

        .type-label {
            padding: 5px 10px;
            background-color: var(--secondary);
            font-weight: 600;
            font-size: small;
            border-radius: 10px;
            display: inline-block;
            margin: 10px 0;
            position: absolute;
            top: 8px;
            right: 70px;
        }

        .technologies {
            margin-top: 15px;

            ul {
                font-size: small;
                display: flex;
                gap: 15px;
                max-width: 100%;
                flex-wrap: wrap;
            }
        }

        
        a {
            padding: 6px 10px;
            border-radius: 50%;
            background-color: var(--accent);
            position: absolute;
            top: 15px;
            right: 15px;
        }
    }

</style>