<template>
    <div class="test__footer">
        <p class="test__footer-text">Прохождение теста займет у вас не более <span class="test__span">12 минут</span>, а его
            результаты вы
            сможете <span class="test__span">использовать всю
                жизнь.</span>
        </p>
        <div class="test__footer-card">
            <p class="test__text">Профессиональная интерпретация и детально <b>проработанные рекомендации</b> позволят вам
                качественно <b>изменить все
                    аспекты своей жизни:</b> от финансового до любовного.</p>
        </div>
        <YellowButton buttonText="Пройти тест" buttonClass="test__btn" />
        <div class="test__footer-year">
            <img src="../assets/images/ellipse.png" class="test__footer-symbol" />
            <p>
                2019

            </p>
        </div>
    </div>
</template>

<script>
import YellowButton from './YellowButton.vue';

export default {
    name: "StartTestFooter",
    components: {
        YellowButton
    }
}
</script>

<style>
.test__span {
    color: #FFC700;
}

.test__btn {
    background-color: transparent;
    color: #ffff;
    border: 1px solid #FFFFFF;
    margin-top: 24px;
    margin-bottom: 53px;
}

.test__btn:hover {
    background: #DADADA;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: #0D0C11;
    border: none;
}

.test__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffff;
    background: url(../assets/images/main_bg_lg.png);
}

.test__footer-text {
    margin-top: 56px;
    margin-right: 51px;
    width: 262px;
    height: 87px;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.05em;
}

.test__footer-card {
    background: rgba(243, 243, 242, 0.8);
    border-radius: 20px;
    width: 303px;
    height: 216px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.test__text {
    width: 274px;
    height: 156px;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #181818;
}

.test__footer-symbol {
    width: 8px;
    height: 8px;
    margin-right: 5px;
}

.test__footer-year {
    margin-bottom: 13px;
    width: 35px;
    height: 18px;
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.5);
}
</style>