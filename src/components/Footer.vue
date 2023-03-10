<template>
    <footer class="footer">
        <div class="text">
            Copyright © 2021 — 2022 Indian Type Foundry. All rights reserved.
        </div>
    </footer>
</template>




<style scoped>
.footer {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(34, 34, 34, 0.5);
    padding: 0 40px;
    margin-top: auto;
    margin-bottom: 0;
}

.text {
    font-size: 12px;
    color: rgb(80, 80, 80);
}

@media screen and (max-width: 1532px) {
    .footer {
        justify-content: flex-start;
    }
}

@media screen and (max-width: 1278px) {
    .footer {
        height: 120px;
        align-items: flex-end;
        padding: 0 20px;
    }
    .text {
        padding-bottom: 22px;
    }
}

</style>