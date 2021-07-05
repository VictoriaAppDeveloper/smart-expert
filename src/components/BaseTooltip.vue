<template>
  <div class="base-tooltip"
       :class="'base-tooltip--' + direction"
       @mouseover="show = true"
       @mouseleave="show = false"
  >
    <slot>
    </slot>
    <div class="base-tooltip__content"
         ref="content"
         :class="[
             (show) ? 'block': 'hidden',
              {'base-tooltip__content--offset': offset},
              {'base-tooltip__content--offsetxy': offsetXY},
        ]"
    >
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
      show: false,
      offset: false,
      offsetXY: false
    }
  },
  watch: {
    show () {
      if (this.$refs.content) {
        this.$nextTick(() => {
          let contentRect = this.$refs.content.getBoundingClientRect()
          this.offset = (contentRect.x < 0 || contentRect.y < 0
              || contentRect.x + contentRect.width > window.innerWidth || contentRect.y + contentRect.height > window.innerHeight)
          this.offsetXY = (contentRect.y + contentRect.height > window.innerHeight)
        })

      }
    }
  },
}
</script>

<style lang="scss">
@import "@/scss/components/base-tooltip";
</style>
