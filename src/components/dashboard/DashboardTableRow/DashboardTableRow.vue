<template>
    <component :is="component" :row="row"/>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import DashboardEmptyTableRow from './DashboardEmptyTableRow.vue';
  import DashboardFullTableRow from './DashboardFullTableRow.vue';
  import {Slot} from '../../../store/modules/parking-lot/types';

  @Component({
    name: 'DashboardTableRow',
    components: {DashboardFullTableRow, DashboardEmptyTableRow},
  })
  export default class DashboardTableRow extends Vue {
    @Prop({required: true}) public row!: Slot;

    get component() {
      if (this.row.vehicle) {
        return 'DashboardFullTableRow';
      } else {
        return 'DashboardEmptyTableRow';
      }
    }
  }
</script>

<style scoped>

</style>
