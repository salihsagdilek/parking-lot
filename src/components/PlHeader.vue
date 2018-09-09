<template>
    <header>
        <nav class="navbar is-transparent is-fixed-top">
            <div class="navbar-brand">
                <router-link class="navbar-item" :to="{name:'home'}">
                    <img src="https://bulma.io/images/bulma-logo.png"
                         alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                </router-link>

                <div class="navbar-burger burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link class="navbar-item" :to="{name:'home'}">
                        Dashboard
                    </router-link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <router-link :to="{name:'settings'}" class="button is-primary">
                            <span>Settings</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    name: 'PlHeader',
  })
  export default class PlHeader extends Vue {
  }
</script>

<style scoped>

</style>
