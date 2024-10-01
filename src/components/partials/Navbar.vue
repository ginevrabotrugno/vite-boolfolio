<script>
    export default {
        name: 'Navbar'
    }
</script>

<template>
    <nav>
        <ul>
            <li>
                <RouterLink :to="{name: 'home'}">
                    Home
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'portfolio'}">
                    Portfolio
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'about'}">
                    About
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'contacts'}">
                    Contacts
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">

    nav {
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
            list-style: none;
            display: flex;
            gap: 20px;

                a {
                    color: white;
                    text-decoration: none;
                    padding: 10px 15px;
                    border-radius: 10px;
                    border: 1px solid white;

                    &:hover,
                    &.active {
                        color: yellow;
                        border: 1px solid yellow;
                    }
                }
        }
    }

</style>