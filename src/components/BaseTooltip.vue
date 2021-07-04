<template>
  <div class="base-tooltip"
       :class="'base-tooltip--' + direction"
       @mouseover="show = true"
       @mouseleave="show = false"
  >
    <slot>
    </slot>
    <div class="base-tooltip__content" v-if="show">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTooltip",
  props: {
    direction: {
      type: String,
      default: 'bottom'
    }
  },
  data: () => {
    return {
      show: false
    }
  },
}
</script>

<style lang="scss">
@import "@/scss/components/base-tooltip";
</style>
