<template>
  <div
    v-for="word in words"
    class="card"
    v-bind:class="
      word.correct == 0 ? '' : word.correct == 1 ? 'correct' : 'incorrect'
    "
  >
    <!-- <p> = {{ this.word.numberOftry }}</p> -->
    <p class="word">{{ word.word_A }}</p>
    <input
      type="text"
      v-if="word.correct != 1"
      v-model="word.Answer"
      @keyup.enter="CheckAnswer(word)"
    />
    <p v-if="word.isHintAvailable">{{ word.Hint }}</p>
  </div>
  <!-- <div v-for="(word, index) in words" :key="index"></div> -->
</template>
<script>
export default {
  props: ["words"],
  emits: ["OnComplated","add-new-word"],
  data() {
    return {};
  },

  methods: {
    reset() {
      this.word.Answer = "";
      this.word.correct = false;
    },

    CheckAnswer(word) {
      word.correct = word.word_B == word.Answer ? 1 : 2;
      if (word.correct == 2) word.numberOftry++;

      if (word.numberOftry >= 3) {
        if (confirm("Need a hint?")) {
          word.isHintAvailable = true;
        }
      }

      if (
        this.words.filter((x) => x.correct != 0).length == this.words.length
      ) {
        this.$emit("OnComplated", {
          corrects: this.words.filter((x) => x.correct == 1).length,
          incorrect: this.words.filter((x) => x.correct == 2).length,
        });
        //this.$emit('OnComplated',this.words);
        this.$emit('add-new-word', 'test');
        console.log('add-new-word event emitted');
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
