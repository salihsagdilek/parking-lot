<template>
    <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label">Filter</label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="filter" value="" v-model="mutableValue">
                        All
                    </label>
                    <label class="radio">
                        <input type="radio" name="filter" value="empty" v-model="mutableValue">
                        Empty
                    </label>
                    <label class="radio">
                        <input type="radio" name="filter" value="full" v-model="mutableValue">
                        Full
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Watch, Prop, Vue} from 'vue-property-decorator';

  @Component({
    name: 'DashboardFilter',
  })
  export default class DashboardFilter extends Vue {
    @Prop(String) public value!: string;
    public mutableValue: string = this.value;


    @Watch('mutableValue')
    private onMutableValueChanged(val: string, oldVal: string) {
      this.$emit('input', val);
    }
  }
</script>

<style scoped>

</style>
