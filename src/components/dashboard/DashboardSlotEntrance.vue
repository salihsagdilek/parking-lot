<template>
    <form @submit.prevent="validateAndEntranceVehicle">
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Entrance</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <p class="control">
                <span class="select">
                  <select v-model="vehicle.color" name="color" :disabled="emptySlotNotAvailable"
                          v-validate="'required'">
                      <option value="">Color</option>
                      <option value="blue">Blue</option>
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="black">Black</option>
                      <option value="white">White</option>
                  </select>
                </span>
                    </p>
                    <p class="control is-expanded">
                        <input class="input" type="text" name="plate" placeholder="Plate" v-model="vehicle.plate"
                               v-validate="'required'"
                               :disabled="emptySlotNotAvailable">
                    </p>
                    <p class="control">
                        <input type="submit" class="button is-primary" value="Entrance"
                               :disabled="emptySlotNotAvailable"/>
                    </p>
                </div>
            </div>
        </div>
        <p class="help is-danger has-text-right" v-if="emptySlotNotAvailable">
            All slot Full
        </p>
        <p class="help is-danger has-text-right" v-if="errors.has('color')">
            color is required
        </p>
        <p class="help is-danger has-text-right" v-if="errors.has('plate')">
            plate is required
        </p>
    </form>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {namespace} from 'vuex-class';

  const parkingLot = namespace('parkingLot');

  @Component({
    name: 'DashboardSlotEntrance',
  })
  export default class DashboardSlotEntrance extends Vue {
    @parkingLot.Action('slotEntrance') public slotEntrance: any;
    @parkingLot.Getter('slots') public parkingLotSlots: any;
    public vehicle = {
      color: '',
      plate: '',
    };

    get emptySlotNotAvailable() {
      return !this.parkingLotSlots({isFull: false}).length;
    }

    public validateAndEntranceVehicle() {
      this.$validator.validateAll()
        .then((response: boolean) => {
          if (response) {
            this.slotEntrance(this.vehicle)
              .catch((err: string) => {
                alert(err);
              });
          }
        });
    }
  }
</script>

<style scoped>

</style>
