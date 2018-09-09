<template>
    <section class="container">
        <div class="columns">
            <div class="column is-6">
                <dashboard-table :slots="slots"/>
            </div>
            <div class="column is-6">
                <dashboard-filter v-model="filter"/>
                <dashboard-search v-model="query"/>
                <dashboard-slot-entrance/>
                <dashboard-slot-leave/>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {namespace} from 'vuex-class';
  import DashboardTable from '@/components/dashboard/DashboardTable.vue';
  import DashboardSearch from './DashboardSearch.vue';
  import DashboardFilter from './DashboardFilter.vue';
  import DashboardSlotEntrance from './DashboardSlotEntrance.vue';
  import DashboardSlotLeave from './DashboardSlotLeave.vue';

  const parkingLot = namespace('parkingLot');

  @Component({
    name: 'Dashboard',
    components: {DashboardSlotLeave, DashboardSlotEntrance, DashboardFilter, DashboardSearch, DashboardTable},
  })

  export default class Dashboard extends Vue {
    public query: string = '';
    public filter: string = '';

    @parkingLot.Getter('slots') public parkingLotSlots: any;

    get slots() {
      const data = {
        query: this.query,
      };
      if (this.filter !== '') {
        Object.assign(data, {
          isFull: this.filter === 'full',
        });
      }
      return this.parkingLotSlots(data);
    }
  }
</script>

<style scoped>

</style>
