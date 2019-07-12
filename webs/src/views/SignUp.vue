<template>
  <div class="container">
    <mt-field label="username :" placeholder="Input username" v-model="username"></mt-field>
    <mt-field label="password :" placeholder="Input password" type="password" v-model="password"></mt-field>
    <mt-field label="password :" placeholder="Input password" type="password" v-model="repeatPassword"></mt-field>
    <mt-field label="sex :" placeholder="Select sex" v-model="sex" @focus="selectSex"></mt-field>
    <mt-field label="introduction :" placeholder="introduction" type="textarea" rows="2" v-model="introduction"></mt-field>
    <div class="common-margin">
      <mt-button size="large" type="primary">sign up</mt-button>
    </div>
    <mt-button size="large" type="primary" plain>sign in</mt-button>
    <mt-popup
      :visible.sync="popupVisible"
      position="bottom">
      ...
    </mt-popup>
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
      introduction: '',
      popupVisible: false
    }
  },
  components: {
  },
  created () {
    // this.axios.get('/api/blog').then((response) => {
    //   console.log(response)
    // })
  },
  methods: {
    selectSex () {
      this.popupVisible = true
    }
  }
}
</script>

<style lang="scss">
  .container{
    margin: 20px;
    border: 1px solid #ddd;
    padding: 10px;
    box-shadow: 10px 10px 5px #eee;
    .mint-field .mint-cell-title{
      text-align: right;
      padding-right: 10px;
    }
  }
</style>
