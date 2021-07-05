<template>
  <div class="ml-16px">
    <label for="select" class="mb-8px">Text</label>
    <BaseSelect v-model="selectedId" :items="selectItems" id="select"/>
  </div>
</template>

<script>
import BaseSelect from "../components/BaseSelect";
export default {
name: "BaseSelectPage",
  components: {BaseSelect},
  data: () => {
    return {
      selectedId: 1,
      selectItems: []
    }
  },
  async mounted() {
    const response = await this.axios.get('https://60de1565878c890017fa2d5f.mockapi.io/api/v1/users')
    if (response.data) {
      this.selectItems = response.data
    }
  },

}
</script>

<style scoped>

</style>
