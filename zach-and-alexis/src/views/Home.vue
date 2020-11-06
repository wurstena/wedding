<template>
<div>
  <div class="wrapper">
  </div>
  <PhotoList :photos="photos" />
</div>
</template>


<script>
import PhotoList from "../components/PhotoList.vue"
export default {
  name: 'Home',
  components: {
    PhotoList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    photos() {
      return this.$root.$data.photos;
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
