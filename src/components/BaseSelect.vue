<template>
  <div class="base-select" v-click-outside="hide"
       :class="{'base-select--open': opened}">
    <button class="base-select__field" :id="id" @focus="opened = true">
      {{value}}
      <span class="base-select__dropdown-icon">
        <img src="@/assets/icons/dropdown.svg">
      </span>
    </button>
    <div class="base-select__options" v-if="opened">
      <div class="base-select__option" v-for="(item, key) of items"
           :key="key"
           @click="setActive(key)"
      >
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: "BaseSelect",
  props: {
    value: {
      type: String
    },
    items: {
      type: Array,
      default: () => []
    },
    id: {
      type: String
    }
  },
  data: () => {
    return {
      active: 0,
      opened: false
    }
  },
  methods: {
    setActive (key) {
      this.opened = false
      this.active = key
      this.$emit('input', this.items[key])
    },
    hide () {
      this.opened = false
    }
  },
  directives: {
    ClickOutside
  },
  mounted() {
    if (!this.value) {
      this.$emit('input', this.items[this.active])
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/components/base-select";
</style>
