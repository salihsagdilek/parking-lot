<template>
    <div class="settings container">
        <form @submit.prevent="saveSettings">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">X Slots</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="e.g. Partnership opportunity"
                                   v-model="settings.x">
                        </div>
                        <p class="help is-info">
                            Please enter comma space, etc: A,B,C,D
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Y Slots</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="e.g. Partnership opportunity"
                                   v-model="settings.y">
                        </div>
                        <p class="help is-info">
                            Please enter comma space, etc: 1,2,3,4,5,6,7,8,9,10
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Parking Lot Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="e.g. Partnership opportunity"
                                   v-model="settings.name">
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label">
                    <!-- Left empty for spacing -->
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="submit" class="button is-primary" value="Save Settings">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {namespace} from 'vuex-class';
  import {SettingsTranformer} from '../tranformers/SettingsTranformer';

  const parkingLot = namespace('parkingLot');

  @Component({
    name: 'Settings',
  })
  export default class Settings extends Vue {
    @parkingLot.Getter('settings') public parkingLotSettingsGetter: any;
    @parkingLot.Action('saveSettings') public parkingLotSaveSettings: any;

    public settings = {
      name: '',
      x: '',
      y: '',
    };

    public saveSettings() {
      this.parkingLotSaveSettings(SettingsTranformer.send(this.settings))
        .then((response: any) => {
          this.$router.push({name: 'home'});
        });
    }

    private created() {
      this.settings = Object.assign({}, this.settings, SettingsTranformer.fetch(this.parkingLotSettingsGetter));
    }

  }
</script>

<style scoped>

</style>
