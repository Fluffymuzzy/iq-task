<template>
    <section class="test__wrapper" v-if="!testCompleted && !loading">
        <div class="test__progress" :style="{ background: progressBar }">
        </div>
        <p class="test__question">{{ getCurrentQuestion.question }}</p>
        <div class="test__image" v-if="getCurrentQuestion.image">
            <img :src="getCurrentQuestion.image" alt="image" />
        </div>
        <div class="test__options">
            <label v-for="(option, index) in getCurrentQuestion.options" :key="index" :class="`option ${getCurrentQuestion.selected == index ? index == getCurrentQuestion.answer ? 'correct'
                : 'correct' : ''} ${getCurrentQuestion.selected != null && index != getCurrentQuestion.selected ? 'disabled' : ''
                }`">
                <input type="radio" :name="getCurrentQuestion.index" :value="index" v-model="getCurrentQuestion.selected"
                    :disabled="getCurrentQuestion.selected" @change="setAnswer">
                <div v-if="getCurrentQuestion.isColorQuestion" class="color__option"
                    :style="{ backgroundColor: option.value }"></div>
                <span class="test__option" v-else>{{ option }}</span>
            </label>
        </div>
        <Button buttonText="Далее" buttonClass="test__btn" @click="nextQuestion" :disabled="!getCurrentQuestion.selected" />
    </section>


    <section v-if="loading" class="test__wrapper">
        <div class="test__progress" :style="{ background: progressBar }">
        </div>
        <h1 class="test__processing">Обработка результатов</h1>
        <div class="test__spinner"></div>
        <p class="test__text">Определение стиля мышления...........
            .... ...................................................</p>
    </section>

    <section v-if="testCompleted && !loading" class="test__wrapper">
        <h2>done!</h2>
    </section>
</template>

<script setup>

import { ref, computed } from "vue"
import Button from '../components/Button.vue';

const questions = ref([
    {

        question: "Ваш пол:",
        answer: 2,
        options: [
            "Мужчина",
            "Женщина"
        ],
        selected: null,
        image: null,


    },
    {

        question: "Укажите ваш возраст:",
        answer: 4,
        options: [
            "До 18",
            "От 18 до 28",
            "От 29 до 35",
            "От 36"
        ],
        selected: null,
        image: null,

    },
    {

        question: "Выберите лишнее:",
        answer: 5,
        options: [
            "Дом",
            "Шалаш",
            "Бунгало",
            "Скамейка",
            "Хижина"
        ],
        selected: null,
        image: null,

    },
    {

        question: "Продолжите числовой ряд: 18 20 24 32",
        answer: 6,
        options: [
            "62",
            "48",
            "74",
            "57",
            "60",
            "77"
        ],
        selected: null,
        image: null,

    },
    {

        question: "Выберите цвет, который сейчас вам наиболее приятен:",
        answer: 9,
        options: [
            { value: "#A8A8A8" },
            { value: "#0000A9" },
            { value: "#00A701" },
            { value: "#F60100" },
            { value: "#FDFF19" },
            { value: "#A95403" },
            { value: "#000000" },
            { value: "#850068" },
            { value: "#46B2AC" },
        ],
        selected: null,
        image: null,
    },
    {

        question: "Отдохните пару секунд и выберите цвет, который сейчас наиболее Вам приятен:",
        answer: 9,
        options: [
            { value: "#A8A8A8" },
            { value: "#46B2AC" },
            { value: "#A95403" },
            { value: "#00A701" },
            { value: "#000000" },
            { value: "#F60100" },
            { value: "#850068" },
            { value: "#FDFF19" },
            { value: "#0000A9" },
        ],
        selected: null,
    },
    {

        question: "Какой из городов лишний? (Москва)",
        answer: 6,
        options: [
            "Вашингтон",
            "Лондон",
            "Париж",
            "Нью-Йорк",
            "Москва",
            "Оттава"
        ],
        selected: null,
        image: null,

    },
    {
        question: "Выберите правильную фигуру из четырёх пронумерованных.",
        answer: 4,
        options: [
            "1",
            "2",
            "3",
            "4",
        ],
        selected: null,
        image: "../../public/images/test/test.png",

    },
    {

        question: "Вам привычнее и важнее",
        answer: 3,
        options: [
            "Наслаждаться каждой минутой проведенного времени",
            "Быть устремленными мыслями в будущее",
            "Учитывать в ежедневной практике прошлый опыт",
        ],
        selected: null,
        image: null,

    },
    {
        question: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
        answer: 3,
        options: [
            "Оно остроконечное",
            "Оно устойчиво",
            "Оно-находится в состоянии равновесия",
        ],
        selected: null,
        image: "../../public/images/test/test2.png",

    },
    {
        question: "Вставьте подходящее число",
        answer: 6,
        options: [
            "34",
            "36",
            "53",
            "44",
            "66",
            "42"
        ],
        selected: null,
        image: "../../public/images/test/test3.png",

    },
])

const testCompleted = ref(false)
const currentQuestion = ref(0)
const loading = ref(false);

const getCurrentQuestion = computed(() => {
    let question = questions.value[currentQuestion.value];
    question.index = currentQuestion.value;

    if (question.options.some(option => typeof option === "object")) {
        question.isColorQuestion = true;
    }
    return question;
})

const progressWidth = computed(() => {
    return `${((currentQuestion.value + 1) / questions.value.length) * 100}%`;
});

const progressBar = computed(() => {
    return `linear-gradient(to right, #3BDE7C ${progressWidth.value}, #F2F3F3 ${progressWidth.value})`;
});


const setAnswer = (e) => {
    questions.value[currentQuestion.value].selected = e.target.value;
    e.target.value = null;

}

const nextQuestion = () => {
    if (currentQuestion.value < questions.value.length - 1) {
        currentQuestion.value++
    } else {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            testCompleted.value = true;
        }, 5000);
    }
}

</script>

<style>
/* quiz styles */

.test__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(/images/main_bg_lg.png);
    min-height: 100vh;
}

.test__image {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.test__image img {
    max-width: 100%;
    max-height: 100%;
}

.color__option {
    width: 100%;
    height: 30px;
    margin: 5px;
    cursor: pointer;
}

.test__progress {
    margin-top: 17px;
    width: 260px;
    height: 11px;
    background-color: #F2F3F3;
    mix-blend-mode: normal;
    opacity: 0.59;
    border-radius: 10.5px;
}

.test__option {
    color: #fff;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 48px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    margin-left: 15px;
}

.test__question {
    margin-top: 20px;
    margin-bottom: 90px;
    width: 237px;
    height: 26px;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #fff;
}

.test__options {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
}

.option {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
    background-color: #1e2020;
    border-radius: 0.05rem;
}

.option.correct {
    background-color: #FFC700;
}

.option.disabled {
    opacity: 0.5;
}

.option:hover {
    background-color: #FFC700;
    border-radius: 0.05rem;
}

.option:last-of-type {
    margin-bottom: 0;
}

.option input {
    display: none;
}

/* ------------------------- */
/* loading page */

.test__processing {
    width: 237px;
    height: 60px;
    margin-top: 49px;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
}

.test__spinner {
    color: #3BDE7C;
    font-size: 90px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 72px auto;
    position: relative;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;
}

@-webkit-keyframes load6 {
    0% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }

    5%,
    95% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }

    10%,
    59% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }

    20% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }

    38% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }

    100% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
}

@keyframes load6 {
    0% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }

    5%,
    95% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }

    10%,
    59% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }

    20% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }

    38% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }

    100% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
}

@-webkit-keyframes round {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes round {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.test__text {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    width: 276px;
    height: 60px;
}

/* ------------------------- */
</style>