<template>
  <div class="ml-16px">
    <label for="select" class="mb-8px">Text</label>
    <BaseSelect v-model="selectValue" :items="selectItems" id="select"/>
  </div>
</template>

<script>
import BaseSelect from "../components/BaseSelect";
export default {
name: "BaseSelectPage",
  components: {BaseSelect},
  data: () => {
    return {
      selectValue: 'text',
      selectItems: ['text', 'text1', 'text2']
    }
  }
}
</script>

<style scoped>

</style>
