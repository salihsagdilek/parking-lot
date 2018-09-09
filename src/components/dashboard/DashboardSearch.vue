<template>
    <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label">Search</label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <input class="input" type="text" :value="value" @input="input">
                </div>
                <p class="help">
                    Search by slot number, color, registration number
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component({
    name: 'DashboardSearch',
  })
  export default class DashboardSearch extends Vue {
    @Prop() public value!: string;

    public input(e: any) {
      this.$emit('input', e.target.value);
    }

    get listeners() {
      const {input, ...listeners} = this.$listeners;
      return listeners;
    }
  }
</script>

<style scoped>

</style>
