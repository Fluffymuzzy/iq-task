<template>
    <div class="main">
        <p class="main__pre-title">Пройдите точный и быстрый</p>
        <div class="main__title">
            <span class="main__title-first">тест на</span>
            <span class="main__title-second">определение</span>
            <span class="main__title-third">IQ</span>
        </div>
        <img src="../assets/images/brain.png" alt="logo" class="main__img">
        <YellowButton buttonText="Пройдите тест" buttonClass="main__btn" @click="goToTestPage" />
        <div class="main__text">
            <p class="main__text-first">
                и получите рекомендации
                по развитию своего интеллекта
            </p>
            <p class="main__span-second">и улучшению финансового благосостояния и личной жизни</p>
        </div>
        <div class="main__more">
            <i class="material-icons">arrow_circle_up</i>
            подробнее
        </div>
    </div>
</template>

<script>
import YellowButton from './YellowButton.vue';

export default {
    name: "Main",
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
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(../assets/images/main_bg_lg.png);
    color: white;
}

.main__pre-title {
    margin-top: 27px;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

.main__title {
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: "Yeseva One";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    text-transform: uppercase;
    color: #ffc700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main__text {
    margin-top: 22px;
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (min-width: 320px) {
        width: 286px;
        height: 81px;
    }
}

.main__text-first {
    color: #FFC700;
}

.main__img {
    width: 240px;
    height: 232px;
}

.main__more {
    margin-top: 13px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 11px;
    letter-spacing: 0.05em;
    color: #ffff;
}

.main__more:hover {
    color: #DADADA
}

.main__btn {
    color: #0D0C11;
    background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
}

.main__btn:hover {
    background: #f1d982;
}
</style>