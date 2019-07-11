<template>
  <div class="container">
    <mt-field label="username :" placeholder="Input username" v-model="username"></mt-field>
    <mt-field label="password :" placeholder="Input password" type="password" v-model="password"></mt-field>
    <mt-field label="password :" placeholder="Input password" type="password" v-model="repeatPassword"></mt-field>
    <mt-field label="sex :">
      <mt-switch :value.sync="sex">{{sex ? 'male' : 'female'}}</mt-switch>
    </mt-field>
    <mt-field label="introduction :" placeholder="introduction" type="textarea" rows="2" v-model="introduction"></mt-field>
    <div class="common-margin">
      <mt-button size="large" type="primary">sign up</mt-button>
    </div>
    <mt-button size="large" type="primary" plain>sign in</mt-button>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'signUp',
  data () {
    return {
      username: '',
      password: '',
      repeatPassword: '',
      sex: '',
      introduction: ''
    }
  },
  components: {
  },
  created () {
    // this.axios.get('/api/blog').then((response) => {
    //   console.log(response)
    // })
  }
}
</script>

<style>
  *{
    font-family: "Microsoft Sans Serif";
  }
  .container{
    margin: 20px;
    border: 1px solid #ddd;
    padding: 10px;
    box-shadow: 10px 10px 5px #eee;
  }
  .common-margin{
    margin: 10px 0
  }
  .container .mint-field .mint-cell-title{
    text-align: right;
    padding-right: 10px;
  }
</style>
