<template>
  <div class="flex flex-wrap">
    <div class="m-12px">
      <BaseTooltip>
        <button>Bottom</button>
        <template #content>
          Text text text text text text text text text
        </template>
      </BaseTooltip>
    </div>
    <div class="m-12px">
      <BaseTooltip direction="top">
        <button>Top</button>
        <template #content>
          Text text text text text text text text text
        </template>
      </BaseTooltip>
    </div>
    <div class="m-12px">
      <BaseTooltip direction="left">
        <button>Left</button>
        <template #content>
          Text text text text text text text text text
        </template>
      </BaseTooltip>
    </div>
    <div class="m-12px">
      <BaseTooltip direction="right">
        <button>Right</button>
        <template #content>
          Text text text text text text text text text
        </template>
      </BaseTooltip>
    </div>
  </div>
</template>

<script>
import BaseTooltip from "../components/BaseTooltip";
export default {
name: "BaseTooltipPage",
  components: {BaseTooltip}
}
</script>

<style scoped>

</style>
