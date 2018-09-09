<template>
    <div class="home">
        <dashboard/>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Dashboard from '@/components/dashboard/Dashboard.vue';

  @Component({
    components: {Dashboard},
  })
  export default class Home extends Vue {
  }
</script>
