<template>
  <PlusWord @add-word="addWordToEnglishWords"></PlusWord>
</template>
<script >
import PlusWord from "../components/PlusWord.vue";


export default {
    components:{PlusWord},
data() {
    return {
        
    }
},

    methods: {
      addWordToEnglishWords(newWord) {
        this.EnglishWords.push(newWord);
      },
}
};
</script>




