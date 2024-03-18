<template>
    <AppHeader />

    <PageMenu />

    <div class="main">
        <slot />
    </div>

    <AppFooter />
</template>

<style>
    html {
        font-size: 16px;
    }

    body {
        font-family: Inter, sans-serif;
        color: #0F0F0F;
        overflow-x: hidden;
    }
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p {
        /*white-space: break-spaces;*/
        white-space: pre-line;
    }
</style>
