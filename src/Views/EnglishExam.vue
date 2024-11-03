<template>
    <h2>Flash Word</h2>
    <!-- <p v-if="EnglishWords.filter(x=>x.correct == 1).length == EnglishWords.length" class="completed">Great, you completed all words!!</p> -->
    <!-- <p>
        you have answered {{ EnglishWords.filter(x=>x.correct == 1 ).length }} out of {{ EnglishWords.length}}
      </p>
      <p >
        you have answered wrong {{ EnglishWords.filter(x=>x.correct == 2).length }} out of {{ EnglishWords.length}}
      </p> -->
    <div id="cards">
        <!-- <WordCard v-for="word in ShuffledWords" v-bind:word="word"/> -->
        <WordCard2 @add-new-word="addWordToEnglishWords" v-if="!IsExamComplated" v-bind:words="EnglishWords"
            @OnComplated="ExamComplated" />
        <p v-if="IsExamComplated">number of correct -> {{ ExamRes.corrects }} and number of incorrect -> {{
            ExamRes.incorrect }}</p>
    </div>

    <div>
        <button @click="resetBtn()">reset all</button>
        <button @click="resetWrongAnswer()">reset wrong answer</button>
    </div>
</template>
<script>
import WordCard2 from "../components/WordCard2.vue";
export default {
    components: { WordCard2 },
    emits: ["add-new-word","group-add",],
    data() {
        return {
            IsExamComplated: false,
            ExamRes: null,
            EnglishWords: [
                {
                    word_A: "hola",
                    word_B: "hello",
                    Hint: "whats`s app",
                    Answer: "",
                    correct: 0,
                    numberOftry: 0,
                    isHintAvailable: false,
                },
                {
                    word_A: "uno",
                    word_B: "one",
                    Hint: "number",
                    Answer: "",
                    correct: 0,
                    numberOftry: 0,
                    isHintAvailable: false,
                },
                {
                    word_A: "uno1",
                    word_B: "one",
                    Hint: "number",
                    Answer: "",
                    correct: 0,
                    numberOftry: 0,
                    isHintAvailable: false,
                },

            ],
        };
    },
    computed: {
        ShuffledWords() {
            return this.EnglishWords.sort(() => 0.5 - Math.random());
        },


    },
    methods: {
        ExamComplated(val) {
            console.log('Complate: ', val);
            this.ExamRes = val;
            this.IsExamComplated = true;
        },
        resetBtn() {
            window.location.reload();
        },
        addWordToEnglishWords(newWord) {
            this.EnglishWords.push(newWord);
        },
    },
};
</script>

<style>
[v-cloak] {
    display: none;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    margin-top: 60px;
}

#cards {
    justify-content: center;
    display: grid;
    grid-template-columns: 350px 350px 350px;
    grid-gap: 30px;
}

button {
    margin: 15px;
    margin-top: 3em;
    padding: 10px;
    color: blue;
    background-color: #e8f0ff;
    border: 0;
    font-size: 20px;
    border-radius: 5px;
}

.card {
    background-color: #e8f0ff;
    border-radius: 5px;
    padding: 10px 0;
    font-size: 25px;
}

input[type="text"] {
    border: 0;
    font-size: 25px;
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
    padding: 5px;
}

.word {
    font-weight: bold;
    padding: 0;
    margin: 0;
}

.correctanswer {
    padding: 0;
    margin: 0;
}

.correct {
    color: #0f5132;
    background-color: #d1e7dd;
}

.incorrect {
    color: #db4343;
    background-color: #e8f0ff;
}

.correctCount {
    font-size: 20px;
    margin: 10px;
    font-weight: bold;
    padding: 10px;
}

.completed {
    font-size: 20px;
    font-weight: bold;
    color: #0f5132;
    padding: 10px;
    margin: 10px;
}
</style>