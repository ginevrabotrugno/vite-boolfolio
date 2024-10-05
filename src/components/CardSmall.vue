<script>
export default {
    name: 'CardSmall',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card">
        <h3>
            {{ project.title }}
        </h3>
        <RouterLink :to="{name: 'ProjectDetails', params: {slug: project.slug}}">
            <i class="fa-solid fa-eye"></i>
        </RouterLink>
    </div>


</template>

<style scoped lang="scss">

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


</style>