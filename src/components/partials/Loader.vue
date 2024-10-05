<script>
export default {
    name: 'Loader'
}
</script>

<template>

<div class="loader"></div>

</template>

<style scoped lang="scss">

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

</style>