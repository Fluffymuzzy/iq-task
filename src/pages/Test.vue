<template>
    <section class="test__wrapper" v-if="!testCompleted">
        <div class="test__progress"></div>
        <p class="test__question">{{ getCurrentQuestion.question }}</p>
        <div class="test__options">
            <label v-for="(option, index) in getCurrentQuestion.options" :key="index" :class="`option ${getCurrentQuestion.selected == index ? index == getCurrentQuestion.answer ? 'correct'
                : 'correct' : ''} ${getCurrentQuestion.selected != null && index != getCurrentQuestion.selected ? 'disabled' : ''
                }`">
                <input type="radio" :name="getCurrentQuestion.index" :value="index" v-model="getCurrentQuestion.selected"
                    :disabled="getCurrentQuestion.selected" @change="setAnswer">

        
                <div v-if="getCurrentQuestion.isColorQuestion" class="color-option"
                    :style="{ backgroundColor: option.value }"></div>

                
                <span class="test__option" v-else>{{ option }}</span>
            </label>
        </div>
        <YellowButton buttonText="Далее" buttonClass="test__btn" @click="nextQuestion"
            :disabled="!getCurrentQuestion.selected" />
    </section>


    <section v-else>
        <h2>done!</h2>
    </section>
</template>

<script setup>


import { ref, computed } from "vue"
import YellowButton from '../components/YellowButton.vue';



const questions = ref([
    {

        question: "Ваш пол:",
        answer: 2,
        options: [
            "Мужчина",
            "Женщина"
        ],
        selected: null,
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
    }
])

const testCompleted = ref(false)
const currentQuestion = ref(0)

const getCurrentQuestion = computed(() => {
    let question = questions.value[currentQuestion.value];
    question.index = currentQuestion.value;

    if (question.options.some(option => typeof option === "object")) {
        question.isColorQuestion = true;
    }


    return question;
})

const setAnswer = (e) => {
    questions.value[currentQuestion.value].selected = e.target.value;
    e.target.value = null;

}

const nextQuestion = () => {
    if (currentQuestion.value < questions.value.length - 1) {
        currentQuestion.value++
    } else {
        testCompleted.value = true;
    }
}


</script>

<style>
.color-option {
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 50%;
    cursor: pointer;
}

.test__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(../assets/images/main_bg_lg.png);
    height: 100vh;
}

.test__progress {
    margin-top: 17px;
    width: 260px;
    height: 11px;
    background: #F2F3F3;
    mix-blend-mode: normal;
    opacity: 0.59;
    border-radius: 10.5px;
}


.test__option {
    color: #fff;
}

.test__question {
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

.test__options {}
</style>