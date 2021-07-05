<template>
  <div class="base-select" v-click-outside="hide"
       :class="{'base-select--open': opened}">
    <button class="base-select__field" :id="id" @focus="opened = true">
      {{valueName}}
      <span class="base-select__dropdown-icon">
        <img src="@/assets/icons/dropdown.svg">
      </span>
    </button>
    <div class="base-select__options"
         ref="options"
         :class="[
             (opened) ? 'block': 'hidden',
             {'base-select__options--offset': offset}
             ]"
    >
      <div class="base-select__option" v-for="(item, key) of items"
           :key="key"
           @click="setActive(item.id)"
      >
        {{item.name}}
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
      type: Number
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
      opened: false,
      offset: false
    }
  },
  computed: {
    valueName () {
      return (this.value && this.items.length > 0) ? this.items.find(item => this.value === Number(item.id)).name : ''
    },
  },
  watch: {
    opened () {
      if (this.$refs.options) {
        this.$nextTick(() => {
          this.toggleOffset()
        })
      }
    }
  },
  methods: {
    toggleOffset () {
        let optionsRect = this.$refs.options.getBoundingClientRect()
        this.offset = (optionsRect.y + optionsRect.height > window.innerHeight)
    },
    setActive (id) {
      this.opened = false
      this.active = id
      this.$emit('input', Number(this.items.find(item => id === item.id).id))
    },
    hide () {
      this.opened = false
    },
    onResize () {
      if (this.$refs.options) {
        let optionsRect = this.$refs.options.getBoundingClientRect()
        if (optionsRect.y + optionsRect.height > window.innerHeight) {
          this.$nextTick(() => {
            this.toggleOffset()
          })
        }
      }
    }
  },
  directives: {
    ClickOutside
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
}
</script>

<style lang="scss">
@import "@/scss/components/base-select";
</style>
