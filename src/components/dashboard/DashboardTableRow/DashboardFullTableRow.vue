<template>
    <tr>
        <th>{{row.code}}</th>
        <td>{{row.vehicle.color}}
        </td>
        <td>{{row.vehicle.plate}}</td>
        <td>{{humanReadableDate}}</td>
        <td>{{timeAgo}}</td>
    </tr>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import dateFormat from 'date-fns/format';
  import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
  import {FullSlot} from '../../../store/modules/parking-lot/types';

  @Component({
    name: 'DashboardFullTableRow',
  })
  export default class DashboardFullTableRow extends Vue {
    @Prop({required: true}) public row!: FullSlot;
    public timer: any = undefined;
    public timeAgo: string = '';


    public setTimeAgo(): void {
      this.timeAgo = distanceInWordsToNow(this.row.vehicle.entryTime);
    }

    get humanReadableDate(): string {
      return dateFormat(this.row.vehicle.entryTime, 'MMM DD HH:mm');
    }

    private created(): void {
      this.setTimeAgo();
      this.timer = setInterval(this.setTimeAgo, 1000 * 60);
    }

    private beforeDestroy(): void {
      clearInterval(this.timer);
    }
  }
</script>

<style scoped>

</style>
