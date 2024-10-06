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
        <h4>
            {{ project.title }}
        </h4>
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    a {
        padding: 9px 10px;
        border-radius: 50%;
        background-color: var(--accent);
    }

}


</style>