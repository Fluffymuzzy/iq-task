<template>
    <section class="test__wrapper" v-if="!testCompleted">
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


    <section v-else-if="loading">
    </section>

    <section v-else>
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
        }, 3000);
    }
}




</script>

<style>
.loading {
    color: #fff;
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

.test__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(../../public/images/main_bg_lg.png);
    min-height: 100vh;
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

.test__progress.completed {
    background-color: #00FF00;
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
</style>