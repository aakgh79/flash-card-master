<template>
  <div class="card"v-bind:class="word.correct == 0 ? '' : word.correct == 1 ? 'correct' : 'incorrect'">
    <!-- <p>Trys = {{ this.word.numberOftry }}</p> -->
    <p class="word">{{ word.word_A }}</p>
    <input
      type="text"
      v-if="word.correct != 1"
      v-model="word.Answer"
      @keyup.enter="CheckAnswer()"
    />
    <!-- <p v-else class="correct.word_B">{{ word.word_B }}</p>-->
    <p v-if="word.isHintAvailable">{{ word.Hint }}</p> 
  </div>
  <!-- <div v-for="(word, index) in words" :key="index"></div> -->
</template>
<script>
export default {
  name: "WordCard",
  props: { word: Array },
  data() {
    return {};
  },

  methods: {
    reset() {
      this.word.Answer = "";
      this.word.correct = false;
    },

    CheckAnswer() {
      this.word.correct = this.word.word_B == this.word.Answer ? 1 : 2;
      if (this.word.correct == 2)
        this.word.numberOftry++;
        
        if(this.word.numberOftry >= 3){
            if(confirm('Need a hint?')){
                this.word.isHintAvailable = true;
            }
        }
    },
  },
};
</script>
<style scoped>
.card {
  background-color: #e8f0ff;
  border-radius: 5px;
  padding: 10px 0px;
  font-size: 25px;
}

input[type="text"] {
  border: 0;
  font-size: 22px;
  border-radius: 5px;
  margin-top: 5px;
  text-align: center;
  padding: 5px;
}

.word {
  font-weight: bold;
}

.correctAnswer {
  padding: 0;
  margin: 0;
}

.correct {
  color: green;
  background-color: #d1e7dd;
}
.incorrect {
  color: red;
  background-color: #fa9b9b;
}
</style>
