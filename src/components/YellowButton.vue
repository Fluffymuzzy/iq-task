<template>
    <button class="custom__button" :class="buttonClass">
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    name: "YellowButton",
    props: {
        buttonText: {
            type: String,
            default: ""
        },
        buttonClass: {
            type: String,
            default: ""
        }
    },
    methods: {
        onClick() {

        }
    }
}
</script>

<style scoped>
.custom__button {
    width: 189px;
    height: 41px;
    background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
    border-radius: 20px;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #0D0C11;
    cursor: pointer;
}

.custom__button:hover {
    background: #f1d982;
}
</style>