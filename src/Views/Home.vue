<template >  
  <div>
    <AddWord @add-new-word="OnPushToEnglishExam" />
    <hr/>
    <EnglishExam ref="engRef"></EnglishExam>
  </div>
</template>
<script>
import AddWord from './AddWord.vue';
import EnglishExam from './EnglishExam.vue';

export default {
  components:{"AddWord":AddWord,"EnglishExam":EnglishExam},
  props: {
  addNewWord: {
    type: String,
    required: true
  }
},
  data(){
    return{
addNewWord:"test"
    }
  },
  mounted(){

  },
  methods:{
  //   OnNewWordAdded(val){
  //     console.log('new word added: ',val);
  //     this.$refs.engRef.EnglishWords.push(val);
  //   },
  //   addNewWord(val){
  //     this.$refs.engRef.EnglishWords.push(val);
  //     console.log('new word for: ',val);
  //   }
  // },

  OnPushToEnglishExam(wordGroup) {
    console.log('push to english exam: ', wordGroup);
    this.$refs.engRef.EnglishWords.push(...wordGroup);
},

  },
};
</script>
<style lang="">
  
</style>