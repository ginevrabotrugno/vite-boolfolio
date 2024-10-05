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
    <h2> {{ project.title }} </h2>
    <h5> {{ project.start_date }} </h5>
    <div class="type-label">
        {{ project.type.name }}
    </div>
    <ul>
        <li v-for="(technology, i) in project.technologies" :key="i">
            {{ technology.name }}
        </li>
    </ul>
    <RouterLink :to="{name: 'ProjectDetails', params: {slug: project.slug}}">
        <i class="fa-solid fa-eye"></i>
    </RouterLink>
</div>


</template>

<style scoped lang="scss">

    .card {
        width: calc((100% / 4) - 20px);
        aspect-ratio: 3 / 2;
        padding: 15px;
        text-align: left;
        margin-top: 25px;
        border-radius: 20px;
        border: solid 1px var(--secondary);
        background-color: var(--background);
        position: relative;
        line-height: 1.5;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        .type-label {
            padding: 8px 12px;
            background-color: var(--secondary);
            font-weight: 600;
            border-radius: 10px;
            display: inline-block;
            margin: 10px 0;
        }

        ul {
            margin-top: 15px;
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

</style>