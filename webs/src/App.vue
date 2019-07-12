<template>
  <div id="app">
    <mt-header :title="title">
      <mt-button router-link="'/'" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        title: ''
      }
    },
    watch: {
      $route (to, from) {
        this.title = to.meta.title
      }
    }
  }
</script>
<style lang="scss">
@import '@/assets/common.scss';
#app {
  .mint-header-title{
    line-height: 20px;
  }
}
</style>
