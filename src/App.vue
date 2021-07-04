<template>
  <div id="app">
    <div class="container pt-48px pb-48px">
      <h1>Test Task</h1>
      <div class="card shadow pl-44px pr-44px pt-32px pb-32px">
        <BaseTabs v-model="tabs"/>
        <div class="mt-48px">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BaseTabs from "./components/BaseTabs";
export default {
  name: 'App',
  components: {BaseTabs},
  data: () => {
    return {
      tabs: [
        {
          to: '/base-select',
          title: 'Component: BaseSelect'
        },
        {
          to: '/base-tooltip',
          title: 'Component: BaseTooltip'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./scss/global";
</style>
