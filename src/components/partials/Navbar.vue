<script>
    export default {
        name: 'Navbar'
    }
</script>

<template>
    <nav>
        <ul>
            <li class="nav-link">
                <RouterLink :to="{name: 'home'}">
                    Home
                </RouterLink>
            </li>
            <li class="nav-link">
                <RouterLink :to="{name: 'about'}">
                    About
                </RouterLink>
            </li>
            <li class="nav-link">
                <RouterLink :to="{name: 'contacts'}">
                    Contacts
                </RouterLink>
            </li>
        </ul>
        <div id="header-btn">
            <RouterLink :to="{name: 'portfolio'}">
                Portfolio
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    ul {
        display: flex;
        justify-content: center;
        align-items: center;

        .nav-link {
            margin: 0 15px;

            a {
                &:hover,
                &.active {
                    color: var(--accent);
                    font-weight: 600;
                }
            }

        }
    }

    #header-btn {
        a {
            padding: 10px 18px;
            color: var(--primary);
            background-color: var(--secondary);
            margin-left: 50px;
            font-weight: 700;

            &:hover {
                color: var(--neutral);
                background-color: var(--primary);
            }
        }

    }

}
</style>