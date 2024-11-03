<template>
  <div class="container">
    <h1>Add Word</h1>
    <div class="form-floating">
      <input type="text" class=" border border-success p-2 mb-2 border-opacity-75 form-control is-invalid"
        id="floatingInputInvalid" v-model="newWord.Word_A" placeholder="word">
      <input type="text" class=" border border-success p-2 mb-2 border-opacity-75 form-control is-invalid"
        id="floatingInputInvalid" v-model="newWord.Word_B" placeholder="answer">
      <input type="text"placeholder="Hint" class=" border border-success p-2 mb-2 border-opacity-75 form-control is-invalid"
        id="floatingInputInvalid" v-model="newWord.Hint" >

    </div>
    <div class="d-grid col-12  mx-0"><button @click="addWord()"
        v-bind:disabled='this.newWord.Word_A == "" || this.newWord.Word_B == ""'>add word</button></div>
  </div>
  {{ wordGroup }}
  <button @click="pushToEnglishExam()">Push to English Exam</button>

</template>

<script>
export default {

  emits: ['add-new-word'],
  data() {
    return {
      newWord: {
        Word_A: '',
        Word_B: '',
        Hint: '',
        Answer: '',
        correct: 0,
        numberOftry: 0,
        isHintAvailable: false,
      },
      wordGroup: []
    }
  },
  mounted() {

  },
  methods: {
    addWord() {

      const newWord = {
        word_A: this.newWord.Word_A,
        Word_B: this.newWord.Word_B,
        Hint: this.newWord.Hint,
        correct: this.newWord.correct,
        numberOftry: this.newWord.numberOftry,
        isHintAvailable: this.newWord.isHintAvailable,
      };

      this.wordGroup.push(newWord);
      // this.$emit('group-add', this.wordGroup);
      // this.$emit('add-new-word', newWord);
      this.newWord.Word_A = '';
      this.newWord.Word_B = '';
      this.newWord.Hint = '';
    }
    ,
    pushToEnglishExam() {
      this.$emit('add-new-word', this.wordGroup);
      this.wordGroup = [];

    }

  },

};
</script>
<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 10px;
  background-color: #E8F0FF;
}

button {
  background-color: green;
  color: yellow;
}

.form-control::placeholder {
  color: #b19c9c;
  opacity: 1;
}
</style>

// https://dev.to/sanchithasr/how-to-communicate-between-components-in-vue-js-kjc
// https://www.youtube.com/watch?v=OaUpEyz4zxs&list=PLVJZjCprNXtW8lB3BN5nULSgwBjzJprxR
// https://www.youtube.com/watch?v=LfWpPRId5N0
// https://www.youtube.com/watch?v=vB6rmWCmANA&list=PLA1RSE1qWuKClzNo6jVN6BMyVOWNR-ymd
// https://www.youtube.com/watch?v=I_xLMmNeLDY