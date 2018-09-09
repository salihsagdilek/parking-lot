<template>
    <tr>
        <th>{{row.code}}</th>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
    </tr>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import {Slot} from '../../../store/modules/parking-lot/types';

  @Component({
    name: 'DashboardEmptyTableRow',
  })
  export default class DashboardEmptyTableRow extends Vue {
    @Prop({required: true, type: Object}) public row!: Slot;
  }
</script>

<style scoped>

</style>
