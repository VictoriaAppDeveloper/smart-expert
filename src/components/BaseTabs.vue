<template>
  <div class="base-tabs">
    <router-link
        v-for="(tab, key) of value"
        :key="key"
        :to="tab.to"
        @click="currentTab = tab"
        class="text-xl lh-xl text-primary font-medium pl-16px pr-16px"
        :class="{'text-brand': $route.path === tab.to}"
    >
      {{ tab.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BaseTabs",
  props: {
    value: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss">
@import "@/scss/components/base-tabs";
</style>
