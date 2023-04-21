<template>
    <section v-if="result" class="test__wrapper">
        <div class="test__result">
            <h2>{{ result.name }}</h2>
            <ul class="test__result">
                <li>Height: {{ result.height }}</li>
                <li>Mass: {{ result.mass }}</li>
                <li>Hair color: {{ result.hair_color }}</li>
                <li>Skin color: {{ result.skin_color }}</li>
                <li>Eye color: {{ result.eye_color }}</li>
                <li>Birth year: {{ result.birth_year }}</li>
                <li>Gender: {{ result.gender }}</li>
            </ul>
        </div>
    </section>
    <section v-else class="test__wrapper">
        <div class="test__spinner"></div>
    </section>
</template>
  
<script>
export default {
    data() {
        return {
            result: null,
        };
    },
    async mounted() {
        this.result = await this.fetchData();
    },
    methods: {
        async fetchData() {
            const response = await fetch("https://swapi.dev/api/people/1/");
            const data = await response.json();
            return data;
        },
    },
};
</script>
  
<style>
.test__result {
    margin-top: 20px;
}

.test__result h2 {
    font-family: 'Yeseva One';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    cursor: pointer;
}

.test__result h2:hover {
    color: #FFC700;
}


.test__result li {
    list-style-type: none;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 48px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    margin-bottom: 5px;
}
</style>
  