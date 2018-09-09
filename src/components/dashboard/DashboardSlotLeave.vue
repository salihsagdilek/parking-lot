<template>
    <form @submit.prevent="validateAndleaveSlot">
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Leave</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <div class="select is-fullwidth">
                            <select name="selectedSlot" v-validate="'required'" v-model="selectedSlot"
                                    :disabled="allSlotEmpty">
                                <option :value="slot" v-for="slot in fullSlots">{{slot.vehicle.plate}}</option>
                            </select>
                        </div>
                    </div>
                    <p class="control">
                        <input type="submit" class="button is-primary" value="Leave" :disabled="allSlotEmpty"/>
                    </p>
                </div>

            </div>
        </div>
        <p class="help is-danger has-text-right" v-if="allSlotEmpty">
            All slot Empty
        </p>
        <p class="help is-danger has-text-right" v-if="errors.has('selectedSlot')">
            slot must be required
        </p>
    </form>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {namespace} from 'vuex-class';
  import {Slot} from '../../store/modules/parking-lot/types';

  const parkingLot = namespace('parkingLot');

  @Component({
    name: 'DashboardSlotLeave',
  })
  export default class DashboardSlotLeave extends Vue {
    @parkingLot.Getter('slots') public parkingLotSlots: any;
    @parkingLot.Action('slotLeave') public parkingLotSlotLeave: any;

    public selectedSlot: null | Slot = null;

    public validateAndleaveSlot() {
      this.$validator.validateAll()
        .then((response: boolean) => {
          if (response) {
            this.parkingLotSlotLeave(this.selectedSlot);
            this.selectedSlot = this.fullSlots[0]
          }
        });
    }

    get allSlotEmpty() {
      return !this.parkingLotSlots({isFull: true}).length;
    }

    get fullSlots() {
      return this.parkingLotSlots({isFull: true});
    }
  }
</script>

<style scoped>

</style>
