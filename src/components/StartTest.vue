<template>
    <div id="test-info" class="start__test-wrapper">
        <p class="start__test-text">Также по результатам теста
            <span>вы получите
            </span>
            подробные советы по определению наиболее перспективной
            <span>для вашего типа <span class="start__test-span">интеллекта</span>
                сферы
                деятельности,
            </span>
            которая принесет вам скорейший финансовый результат.
        </p>
        <img src="../../public/images/home/st-img.png" alt="brain" class="start__test-img">
        <YellowButton buttonText="Пройти тест" buttonClass="start__test-btn" @click="goToTestPage" />
    </div>
</template>

<script>
import YellowButton from './Button.vue';

export default {
    name: "StartTest",
    components: {
        YellowButton
    },
    methods: {
        goToTestPage() {
            this.$router.push("/test")
        }
    }
}
</script>

<style>
span {
    text-transform: uppercase;
    font-weight: bold;
}

.start__test-span {
    text-transform: lowercase;
}


.start__test-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.start__test-text {
    color: #ffff;
    margin-top: 38px;
    display: flex;
    flex-direction: column;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #272727;
}

@media (min-width: 320px) {
    .start__test-text {
        width: 298px;
        height: 180px;
    }
}

.start__test-img {
    margin-top: 38px;
}

.start__test-btn {
    color: #0D0C11;
    margin-bottom: 40px;
    background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
}

.start__test-btn:hover {
    background: #f1d982;
}
</style>