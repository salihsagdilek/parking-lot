<template>
    <table class="table">
        <thead>
        <tr>
            <th>Slot</th>
            <th>Color</th>
            <th>Reg. Number</th>
            <th>Time entered</th>
            <th>Time elapsed</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
            <th>Slot</th>
            <th>Color</th>
            <th>Reg. Number</th>
            <th>Time entered</th>
            <th>Time elapsed</th>
        </tr>
        </tfoot>
        <tbody>
        <dashboard-table-row :row="slot" :key="slot.code" v-for="slot in slots"/>
        </tbody>
    </table>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import DashboardTableRow from '@/components/dashboard/DashboardTableRow/DashboardTableRow.vue';
  import {Slot} from '../../store/modules/parking-lot/types';

  @Component({
    name: 'DashboardTable',
    components: {DashboardTableRow},
  })
  export default class DashboardTable extends Vue {
    @Prop({required: true}) public slots!: Slot[];
  }
</script>

<style scoped>

</style>
