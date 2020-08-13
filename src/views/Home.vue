<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
    mounted() {
      console.log(this.config.api);
      let date = this.utils.date_format(new Date(), 'yyyy年MM月dd日 q季度');
      console.log(date);
      this.$toast('科技哈萨克都能考')
    }
  }
</script>
