<template>
    <div id="app">
        <pl-header />
        <router-view/>
        <pl-footer/>
    </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import PlHeader from '@/components/PlHeader.vue';
  import PlFooter from '@/components/PlFooter.vue';


  @Component({
    components: {
      PlFooter,
      PlHeader,
    },
  })
  export default class App extends Vue {
  }

</script>
<style lang="scss" src="./assets/app.scss"></style>
